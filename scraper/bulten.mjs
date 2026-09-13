// Sanal Bahis — Bülten toplayıcı 1.0  (Node 20+, ek paket yok)
// Mackolik'ten OYNANACAK maçların İddaa oranlarını + canlı skorları + sonuçları çeker.
// mackolik.mjs (arşiv) sadece oynanmış maçları saklar; bu dosya onun canlı/ileri tarihli kardeşidir.
//
// MOD=bulten (varsayılan) : bülteni günceller  → data/bulten.json + data/sonuclar.json
// MOD=test                : tek tur dener, debug/ klasörüne teşhis yazar, veriye dokunmaz

import fs from 'node:fs/promises';
import path from 'node:path';

const KOK = process.cwd();
const VERI = path.join(KOK, 'data');
const DEBUG = path.join(KOK, 'debug');
const BASE = 'https://arsiv.mackolik.com';

const MOD = (process.env.MOD || 'bulten').trim();
const GUN_ILERI = +process.env.GUN_ILERI || 3;      // bugün dahil kaç günlük bülten
const GUN_GERI = +process.env.GUN_GERI || 1;        // kaç gün geriye bakılsın (geç biten maçlar)
const SONUC_GUN = +process.env.SONUC_GUN || 30;     // sonuç arşivi kaç gün tutulsun
const BUTCE_DK = +process.env.BUTCE_DK || 12;       // bir çalışma en fazla kaç dakika
const PARALEL = +process.env.PARALEL || 5;
const BEKLE = +process.env.BEKLE || 120;
const ORAN_LIMIT = +process.env.ORAN_LIMIT || 400;  // bir turda en fazla kaç maç sayfası
const ORAN_TAZE_DK = +process.env.ORAN_TAZE_DK || 90;   // oran bu kadar dakikadan eskiyse yenile
const YAKIN_TAZE_DK = +process.env.YAKIN_TAZE_DK || 25; // maça 6 saatten az kaldıysa bu kadarda bir yenile
const MBS_ALAN = process.env.MBS_ALAN === undefined || process.env.MBS_ALAN === '' ? null : +process.env.MBS_ALAN;

const BITIS = Date.now() + BUTCE_DK * 60000;
const zamanBitti = () => Date.now() > BITIS;
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* ---------- yardımcılar ---------- */
const sade = s => (s || '')
  .replace(/İ/g, 'i').replace(/I/g, 'ı').toLowerCase()
  .replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i')
  .replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u')
  .replace(/\s+/g, ' ').trim();

const gun = d => d.toISOString().slice(0, 10);
const trSimdi = () => new Date(Date.now() + 3 * 3600e3);
const trBugun = () => gun(trSimdi());
const gunEkle = (s, n) => { const d = new Date(s + 'T00:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return gun(d); };
const mk = s => { const [y, m, d] = s.split('-'); return `${d}/${m}/${y}`; };
// TR saatini (UTC+3) gerçek zamana çevir
const baslangicMs = (tarih, saat) => saat ? Date.parse(`${tarih}T${saat}:00+03:00`) : Date.parse(`${tarih}T12:00:00+03:00`);

/* ---------- HTTP ---------- */
const HDR = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36',
  'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.7',
  'Accept-Encoding': 'gzip, deflate',
  'Referer': BASE + '/Canli-Sonuclar'
};
let ardHata = 0, engel = false, ekBekle = 0, istekSay = 0;
let aktif = Math.min(PARALEL, 3), seri = 0, sonDusus = 0;
const basari = () => { ardHata = 0; ekBekle = Math.max(0, ekBekle * 0.8 - 50); if (++seri >= 15 && aktif < PARALEL) { aktif++; seri = 0; } };
const zorlandi = ms => {
  seri = 0; ekBekle = Math.min(ekBekle + ms, 6000);
  if (Date.now() - sonDusus > 4000 && aktif > 2) { aktif--; sonDusus = Date.now(); }
};
function metinCoz(buf, ct) {
  let cs = ((ct || '').match(/charset=([\w-]+)/i) || [])[1];
  if (!cs) cs = (buf.subarray(0, 4000).toString('latin1').match(/charset=["']?([\w-]+)/i) || [])[1];
  cs = (cs || 'utf-8').toLowerCase();
  try { return new TextDecoder(cs).decode(buf); } catch { return new TextDecoder('utf-8').decode(buf); }
}
async function getir(url, deneme = 3) {
  let son = null;
  for (let i = 1; i <= deneme; i++) {
    try {
      istekSay++;
      const r = await fetch(url, { headers: HDR, redirect: 'follow', signal: AbortSignal.timeout(20000) });
      if (r.status === 200) { const buf = Buffer.from(await r.arrayBuffer()); basari(); return metinCoz(buf, r.headers.get('content-type')); }
      son = new Error('HTTP ' + r.status);
      if (r.status === 429 || r.status >= 500) zorlandi(1000);
      if (i < deneme) await sleep(r.status === 429 ? 4000 * i : 1200 * i);
    } catch (e) { son = e; zorlandi(400); if (i < deneme) await sleep(1200 * i); }
  }
  if (++ardHata >= 25) engel = true;
  throw son || new Error('istek başarısız');
}

/* ---------- marketler (arşiv scriptiyle birebir aynı anahtarlar) ---------- */
const M = [
  { k: 'MS', sec: ['1', 'X', '2'], tur: 'ms', test: a => a === 'Maç Sonucu' },
  { k: 'ÇŞ', sec: ['1-X', '1-2', 'X-2'], tur: 'cs', test: a => a === 'Çifte Şans' },
  { k: 'KG', sec: ['Var', 'Yok'], tur: 'kg', test: a => /^Karşılıklı Gol/.test(a) },
  { k: 'HND 1:0', tur: 'hnd', test: a => /^Handikapl. Maç Sonucu \(\s*1\s*[:.\-]\s*0\s*\)$/.test(a) },
  { k: 'HND 0:1', tur: 'hnd', test: a => /^Handikapl. Maç Sonucu \(\s*0\s*[:.\-]\s*1\s*\)$/.test(a) },
  { k: 'HND 2:0', tur: 'hnd', test: a => /^Handikapl. Maç Sonucu \(\s*2\s*[:.\-]\s*0\s*\)$/.test(a) },
  { k: 'HND 0:2', tur: 'hnd', test: a => /^Handikapl. Maç Sonucu \(\s*0\s*[:.\-]\s*2\s*\)$/.test(a) },
  { k: 'AÜ 0,5', tur: 'au', test: a => /^0[.,]5 Alt\/Üst$/.test(a) },
  { k: 'AÜ 1,5', tur: 'au', test: a => /^1[.,]5 Alt\/Üst$/.test(a) },
  { k: 'AÜ 2,5', tur: 'au', test: a => /^2[.,]5 Alt\/Üst$/.test(a) },
  { k: 'AÜ 3,5', tur: 'au', test: a => /^3[.,]5 Alt\/Üst$/.test(a) },
  { k: 'AÜ 4,5', tur: 'au', test: a => /^4[.,]5 Alt\/Üst$/.test(a) },
  { k: 'İY MS', tur: 'iyms', test: a => /^(1\. Yar[ıi]|İlk Yar[ıi]) Sonucu$/.test(a) },
  { k: 'İY AÜ 0,5', tur: 'iyau', test: a => /^(1\. Yar[ıi]|İlk Yar[ıi]) 0[.,]5 Alt\/Üst$/.test(a) },
  { k: 'İY AÜ 1,5', tur: 'iyau', test: a => /^(1\. Yar[ıi]|İlk Yar[ıi]) 1[.,]5 Alt\/Üst$/.test(a) },
  { k: 'Tek/Çift', tur: 'tc', test: a => a === 'Tek/Çift' }
];
const specBul = ad => M.find(s => s.test(ad));
const normEt = (tur, et) => tur === 'cs' ? et.replace(/[\/\s]/g, '-') : et.trim();

const entity = s => s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&#(\d+);/g, (m, n) => String.fromCharCode(+n));

/* ---------- gün listesi (livedata) ---------- */
const LISTE_URL = [
  d => `https://vd.mackolik.com/livedata?date=${d}`,
  d => `https://goapi.mackolik.com/livedata?date=${d}`,
  d => `http://goapi.mackolik.com/livedata?date=${d}`
];
const SKOR_RE = /^\d{1,2}\s*-\s*\d{1,2}$/;
const ORAN_RE = /^\d{1,2}[.,]\d{2}$/;
const okunurAd = p => { const a = (p[0] || '').trim(), b = (p[1] || '').trim(); return b && !/^\d{4}/.test(b) ? `${a} - ${b}` : a; };
const ligAdi = r => Array.isArray(r[36]) ? okunurAd(r[36].filter(v => typeof v === 'string')) : '';

// Satırdaki metinlerden maç durumunu ve dakikayı çıkar
function durumCoz(r, bas, skorVar) {
  const metin = r.filter(v => typeof v === 'string').join(' | ');
  const s = sade(metin);
  let dk = null;
  for (const v of r) {
    if (typeof v !== 'string') continue;
    const m = v.match(/^(\d{1,3})(?:\s*\+\s*\d+)?\s*['’]?$/);
    if (m && +m[1] > 0 && +m[1] <= 120) dk = +m[1];
  }
  let durum = 'bekliyor';
  if (/ertelen|iptal|tatil|hukmen/.test(s)) durum = 'iptal';
  else if (/mac sonu|\bbitti\b|finished/.test(s)) durum = 'bitti';
  else if (/devam|oynan[iı]yor|1\. ?yari|2\. ?yari|ilk yari|ikinci yari|dev\.|uzatma|penalti/.test(s) || dk !== null) durum = 'canli';

  const fark = (Date.now() - bas) / 60000;
  if (durum === 'bekliyor' && skorVar && fark > 0) durum = fark > 140 ? 'bitti' : 'canli';
  if (durum === 'canli' && fark > 160) durum = 'bitti';
  if (durum === 'bekliyor' && fark > 5 && skorVar) durum = 'canli';
  if (durum === 'canli' && dk === null) dk = Math.max(1, Math.min(90, Math.round(fark > 60 ? fark - 15 : fark)));
  return { durum, dk: dk || 0 };
}

// Satırda MS oranı gibi duran 3'lü dizi varsa yakala (maç sayfası açılamazsa yedek)
function satirOran(r) {
  for (const d of r) {
    if (!Array.isArray(d) || d.length < 3) continue;
    const s = d.filter(v => typeof v === 'string' || typeof v === 'number').map(String);
    if (s.length >= 3 && s.slice(0, 3).every(v => ORAN_RE.test(v)) && +s[0].replace(',', '.') >= 1.01) {
      return { '1': s[0].replace(',', '.'), 'X': s[1].replace(',', '.'), '2': s[2].replace(',', '.') };
    }
  }
  return null;
}

async function gunListesi(tarih, rapor) {
  const d = mk(tarih);
  let json = null, hata = '';
  for (const k of [0, 1, 2]) {
    try {
      const txt = await getir(LISTE_URL[k](d), 3);
      const a = txt.indexOf('{'), b = txt.lastIndexOf('}');
      json = JSON.parse(txt.slice(a, b + 1));
      break;
    } catch (e) { hata = e.message; }
  }
  if (!json) throw new Error('maç listesi alınamadı: ' + hata);

  const rows = (Array.isArray(json.m) ? json.m : []).filter(Array.isArray);
  const pay = f => rows.length ? rows.filter(f).length / rows.length : 0;
  const futbolAlan = pay(r => r[23] === 1) > 0.1;
  const kodPay = pay(r => typeof r[14] === 'number' && r[14] > 0);
  const kodFiltre = rows.length > 20 && kodPay > 0.02 && kodPay < 0.98;

  const out = [];
  for (const r of rows) {
    const id = String(r[0]);
    if (!/^\d+$/.test(id)) continue;
    if (futbolAlan && r[23] !== 1) continue;
    if (kodFiltre && !(typeof r[14] === 'number' && r[14] > 0)) continue;   // İddaa'da yok → oranı da yok
    const saat = typeof r[16] === 'string' && /^\d{1,2}:\d{2}$/.test(r[16]) ? r[16] : '';
    const h = String(r[29] ?? ''), a = String(r[30] ?? '');
    const ms = /^\d+$/.test(h) && /^\d+$/.test(a) ? h + '-' + a : '';
    const iy = typeof r[7] === 'string' && SKOR_RE.test(r[7]) ? r[7].replace(/\s/g, '') : '';
    const bas = baslangicMs(tarih, saat);
    const { durum, dk } = durumCoz(r, bas, !!ms);
    out.push({
      id, tarih, saat, bas,
      lig: ligAdi(r) || '?',
      ev: typeof r[2] === 'string' ? r[2] : '',
      dep: typeof r[4] === 'string' ? r[4] : '',
      kod: typeof r[14] === 'number' && r[14] > 0 ? String(r[14]) : '',
      mbs: MBS_ALAN !== null && /^[1-4]$/.test(String(r[MBS_ALAN])) ? String(r[MBS_ALAN]) : '',
      ms, iy, durum, dk,
      yedekOran: satirOran(r)
    });
  }
  if (rapor) rapor.gunler.push({ tarih, satir: rows.length, alinan: out.length, futbolAlan, kodFiltre, ornek: rows[0] });
  return out;
}

/* ---------- maç sayfası → oranlar + MBS ---------- */
const ODDS_RE = /openOddsDialog\(\s*'[^']*'\s*,\s*'([^']*)'\s*,\s*\[([^\]]*)\]\s*,\s*\[([^\]]*)\]\s*,\s*'([^']*)'/g;
const arr = s => s.split(',').map(x => x.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
const MBS_DESEN = [
  /data-mbs=["']?([1-4])/i,
  /["']?mbs["']?\s*[:=]\s*["']?([1-4])\b/i,
  /mbs[_\-]?([1-4])\.(?:png|gif|jpe?g|svg|webp)/i,
  /class=["'][^"']*\bmbs[_\-]?([1-4])\b/i,
  /\bMBS\b\s*(?:<[^>]*>\s*){0,4}[:=]?\s*(?:<[^>]*>\s*){0,4}([1-4])\b/i
];
function macAyristir(html) {
  const r = { mbs: '', kod: '', oran: {} };
  for (const p of MBS_DESEN) { const m = html.match(p); if (m) { r.mbs = m[1]; break; } }
  ODDS_RE.lastIndex = 0;
  let m;
  while ((m = ODDS_RE.exec(html)) !== null) {
    const ad = m[1].trim();
    if (!r.kod) r.kod = m[4];
    const sp = specBul(ad);
    if (!sp) continue;
    const et = arr(m[2]), or = arr(m[3]);
    const h = r.oran[sp.k] || (r.oran[sp.k] = {});
    et.forEach((e, i) => { const v = (or[i] || '').replace(',', '.'); if (+v > 1) h[normEt(sp.tur, e)] = v; });
  }
  return r;
}

/* ---------- depolama ---------- */
const BULTEN = path.join(VERI, 'bulten.json');
const SONUC = path.join(VERI, 'sonuclar.json');
const oku = async (f, v) => { try { return JSON.parse(await fs.readFile(f, 'utf8')); } catch { return v; } };
const yaz = async (f, o) => { await fs.mkdir(path.dirname(f), { recursive: true }); await fs.writeFile(f, JSON.stringify(o, null, 0) + '\n'); };

/* ---------- ana akış ---------- */
async function calis() {
  const test = MOD === 'test';
  const rapor = test ? { gunler: [] } : null;
  const eskiB = await oku(BULTEN, { maclar: {} });
  const eskiSonuc = await oku(SONUC, { sonuclar: {} });
  const eski = eskiB.maclar || {};
  const sonuclar = eskiSonuc.sonuclar || {};

  const bugun = trBugun();
  const gunler = [];
  for (let i = -GUN_GERI; i < GUN_ILERI; i++) gunler.push(gunEkle(bugun, i));

  const liste = [];
  for (const t of gunler) {
    try {
      const g = await gunListesi(t, rapor);
      liste.push(...g);
      console.log(`${t} · ${g.length} maç`);
    } catch (e) { console.log(`${t} · liste hatası: ${e.message}`); }
    await sleep(200);
  }

  // 1) skor/durum her turda güncellenir (bedava, liste isteğinden geliyor)
  const yeniMaclar = {};
  for (const m of liste) {
    const e = eski[m.id] || {};
    yeniMaclar[m.id] = {
      id: m.id, kod: m.kod, mbs: m.mbs || e.mbs || '',
      lig: m.lig, ev: m.ev, dep: m.dep,
      tarih: m.tarih, saat: m.saat, bas: m.bas,
      durum: m.durum, dk: m.dk, iy: m.iy, ms: m.ms,
      oran: e.oran || (m.yedekOran ? { MS: m.yedekOran } : {}),
      oranGuncel: e.oranGuncel || 0
    };
    if (m.ms && (m.durum === 'bitti' || m.durum === 'iptal')) {
      sonuclar[m.id] = { ms: m.ms, iy: m.iy, durum: m.durum, tarih: m.tarih, ev: m.ev, dep: m.dep };
    }
    if (m.durum === 'iptal') sonuclar[m.id] = { ms: m.ms || '', iy: m.iy || '', durum: 'iptal', tarih: m.tarih, ev: m.ev, dep: m.dep };
  }

  // 2) oran çekilecek maçları seç
  const simdi = Date.now();
  const oncelik = m => {
    if (m.durum === 'bitti' || m.durum === 'iptal') return -1;
    const yas = (simdi - (m.oranGuncel || 0)) / 60000;
    const kalan = (m.bas - simdi) / 60000;
    if (!Object.keys(m.oran).length) return 1000 - Math.max(kalan, 0) / 60;     // oranı hiç olmayan önce
    if (m.durum === 'canli') return yas > YAKIN_TAZE_DK ? 500 + yas : -1;       // canlı: skor değişti, oran da tazelensin
    if (kalan < 360 && yas > YAKIN_TAZE_DK) return 400 + yas;                   // maça 6 saatten az
    if (yas > ORAN_TAZE_DK) return 100 + yas;
    return -1;
  };
  const kuyruk = Object.values(yeniMaclar)
    .map(m => ({ m, p: oncelik(m) }))
    .filter(x => x.p > 0)
    .sort((a, b) => b.p - a.p)
    .slice(0, test ? 4 : ORAN_LIMIT)
    .map(x => x.m);

  console.log(`Bültende ${Object.keys(yeniMaclar).length} maç · oran çekilecek ${kuyruk.length}`);

  let ok = 0, bos = 0;
  let i = 0;
  await Promise.all(Array.from({ length: PARALEL }, async (_, w) => {
    while (i < kuyruk.length && !zamanBitti() && !engel) {
      if (w >= aktif) { await sleep(400); continue; }
      const m = kuyruk[i++];
      try {
        const html = await getir(BASE + '/Match/Default.aspx?id=' + m.id);
        const r = macAyristir(html);
        if (test) {
          await fs.mkdir(DEBUG, { recursive: true });
          await fs.writeFile(path.join(DEBUG, `mac-${m.id}.html`), html.slice(0, 400000));
          await fs.writeFile(path.join(DEBUG, `mac-${m.id}.json`), JSON.stringify({ mac: m, cozulen: r }, null, 2));
        }
        if (Object.keys(r.oran).length) {
          m.oran = r.oran; m.oranGuncel = Date.now(); ok++;
          if (r.mbs) m.mbs = r.mbs;
          if (r.kod && !m.kod) m.kod = r.kod;
        } else bos++;
      } catch { }
      await sleep(BEKLE + ekBekle);
    }
  }));

  // 3) oranı hiç olmayan maçları bültenden çıkar, eski günleri temizle
  const sinir = simdi - (GUN_GERI + 1) * 864e5;
  const cikti = {};
  for (const [id, m] of Object.entries(yeniMaclar)) {
    if (!Object.keys(m.oran || {}).length) continue;
    if (m.bas < sinir) continue;
    cikti[id] = m;
  }
  // sonuç arşivini kırp
  const sonucSinir = gunEkle(bugun, -SONUC_GUN);
  for (const [id, s] of Object.entries(sonuclar)) if ((s.tarih || '') < sonucSinir) delete sonuclar[id];

  const ozet = {
    guncel: new Date().toISOString(),
    macSayisi: Object.keys(cikti).length,
    oranCekilen: ok, oransiz: bos, istek: istekSay,
    gunler
  };

  if (test) {
    await fs.mkdir(DEBUG, { recursive: true });
    await fs.writeFile(path.join(DEBUG, 'rapor.json'), JSON.stringify({ ozet, rapor, ornekMaclar: Object.values(cikti).slice(0, 5) }, null, 2));
    console.log('TEST modu — veri yazılmadı. debug/ klasörüne bakın.');
  } else {
    await yaz(BULTEN, { ...ozet, maclar: cikti });
    await yaz(SONUC, { guncel: ozet.guncel, sonuclar });
  }

  const sat = [
    '## Bülten', `- Maç: **${ozet.macSayisi}** · oran çekilen ${ok} · oransız ${bos} · istek ${istekSay}`,
    `- Sonuç arşivi: ${Object.keys(sonuclar).length} maç`,
    `- Güncelleme: ${ozet.guncel.slice(0, 16).replace('T', ' ')} UTC`
  ].join('\n');
  console.log(sat);
  if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, sat + '\n');
}

calis().catch(e => { console.error(e); process.exit(1); });
