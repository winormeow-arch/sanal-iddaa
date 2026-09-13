<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Sanal İddaa — kendi bahis kasam</title>
<style>
:root{
  --sari:#ffe000; --sari-koyu:#f0cf00;
  --koyu:#1b1b1b; --koyu2:#2a2a2a; --koyu3:#3a3a3a;
  --yesil:#00a650; --yesil2:#00c261;
  --kirmizi:#e4002b; --turuncu:#f5821f; --mavi:#1a9ad6;
  --cizgi:#e3e3e3; --zemin:#f2f3f5; --kart:#fff;
  --metin:#1b1b1b; --soluk:#77787b;
  --oran:#f7f7f8; --oran-kenar:#dcdcdc;
}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{margin:0;padding:0}
body{
  background:var(--zemin); color:var(--metin);
  font-family:"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  font-size:14px; line-height:1.35; padding-bottom:96px;
  font-variant-numeric:tabular-nums;
}
button{font-family:inherit;font-size:inherit;cursor:pointer;border:0;background:none;color:inherit}
input,select{font-family:inherit;font-size:inherit}

/* ---------- üst bar ---------- */
header{position:sticky;top:0;z-index:40}
.ust{background:var(--sari);display:flex;align-items:center;gap:10px;padding:8px 12px}
.logo{font-weight:800;letter-spacing:-.6px;font-size:19px;display:flex;align-items:center;gap:2px}
.logo i{font-style:normal;color:#fff;background:var(--koyu);border-radius:4px;padding:1px 5px;margin-right:3px}
.kasa-chip{margin-left:auto;background:var(--koyu);color:var(--sari);font-weight:700;padding:7px 12px;border-radius:20px;font-size:14px;white-space:nowrap}
.yenile{background:rgba(0,0,0,.12);border-radius:50%;width:34px;height:34px;display:grid;place-items:center;font-size:16px}
.yenile.doner{animation:don 1s linear infinite}
@keyframes don{to{transform:rotate(360deg)}}

nav{background:var(--koyu);display:flex;overflow-x:auto;scrollbar-width:none}
nav::-webkit-scrollbar{display:none}
nav button{color:#c9c9c9;padding:11px 16px;font-weight:600;white-space:nowrap;border-bottom:3px solid transparent}
nav button.aktif{color:var(--sari);border-bottom-color:var(--sari)}
nav .rozet{background:var(--kirmizi);color:#fff;border-radius:9px;padding:0 5px;font-size:11px;margin-left:5px;vertical-align:1px}

.filtre{background:#fff;border-bottom:1px solid var(--cizgi);padding:8px 10px;display:flex;gap:7px;overflow-x:auto;scrollbar-width:none;align-items:center}
.filtre::-webkit-scrollbar{display:none}
.cip{border:1px solid var(--oran-kenar);background:#fafafa;border-radius:16px;padding:5px 11px;white-space:nowrap;font-size:13px;font-weight:600;color:#555}
.cip.aktif{background:var(--koyu);color:var(--sari);border-color:var(--koyu)}
.ara{flex:1;min-width:130px;border:1px solid var(--oran-kenar);border-radius:16px;padding:6px 11px;outline:none}
.ara:focus{border-color:var(--koyu)}

/* ---------- bülten ---------- */
.kap{max-width:1100px;margin:0 auto;padding:10px}
.bilgi{background:#fff;border:1px solid var(--cizgi);border-left:4px solid var(--mavi);padding:9px 11px;border-radius:6px;margin-bottom:10px;color:#444;font-size:13px}
.bilgi b{color:var(--metin)}
.bilgi.uyari{border-left-color:var(--turuncu)}

.lig{background:var(--koyu2);color:#fff;padding:7px 10px;font-weight:700;font-size:13px;display:flex;align-items:center;gap:8px;border-radius:6px 6px 0 0;margin-top:12px}
.lig .adet{margin-left:auto;font-weight:600;color:#bdbdbd;font-size:12px}
.grup{background:#fff;border:1px solid var(--cizgi);border-top:0;border-radius:0 0 6px 6px;overflow:hidden}

.satir{display:flex;align-items:stretch;border-bottom:1px solid #eee;min-height:46px}
.satir:last-child{border-bottom:0}
.satir:nth-child(even){background:#fbfbfc}
.sol{flex:1;min-width:0;display:flex;align-items:center;gap:8px;padding:6px 8px}
.saat{font-weight:700;color:#444;font-size:13px;width:42px;flex:none}
.saat small{display:block;font-weight:600;color:var(--soluk);font-size:10px}
.mbs{width:20px;height:20px;flex:none;border-radius:3px;color:#fff;font-weight:800;font-size:12px;display:grid;place-items:center}
.mbs1{background:var(--kirmizi)}.mbs2{background:var(--turuncu)}.mbs3{background:var(--yesil)}.mbs4{background:var(--mavi)}.mbs0{background:#c8c8c8}
.takimlar{min-width:0;flex:1}
.takimlar div{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:600}
.canli-rozet{color:var(--kirmizi);font-weight:800;font-size:11px}
.skor{font-weight:800;color:var(--kirmizi)}
.skor.bitti{color:#444}
.oranlar{display:flex;align-items:center;gap:4px;padding:5px 6px;overflow-x:auto;scrollbar-width:none}
.oranlar::-webkit-scrollbar{display:none}
.ob{min-width:52px;height:36px;border:1px solid var(--oran-kenar);background:var(--oran);border-radius:4px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex:none}
.ob span{font-size:9px;color:var(--soluk);font-weight:700;letter-spacing:.2px}
.ob:active{transform:scale(.96)}
.ob.secili{background:var(--sari);border-color:var(--sari-koyu);color:#000}
.ob.secili span{color:#6b5c00}
.ob.bos{opacity:.35}
.arti{width:30px;flex:none;border-left:1px solid #eee;display:grid;place-items:center;color:var(--soluk);font-size:18px;font-weight:700}
.detay{background:#fff;border-top:1px dashed var(--cizgi);padding:8px 10px}
.mgrup{margin-bottom:9px}
.mgrup h4{margin:0 0 5px;font-size:12px;color:var(--soluk);font-weight:700}
.mgrup .satirlar{display:flex;gap:5px;flex-wrap:wrap}
.mgrup .ob{min-width:64px}

/* ---------- kupon ---------- */
.balon{position:fixed;right:14px;bottom:18px;z-index:60;background:var(--yesil);color:#fff;border-radius:30px;padding:12px 18px;font-weight:800;box-shadow:0 6px 18px rgba(0,0,0,.28);display:flex;align-items:center;gap:9px}
.balon .say{background:#fff;color:var(--yesil);border-radius:50%;width:22px;height:22px;display:grid;place-items:center;font-size:12px}
.perde{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:70;display:none}
.perde.ac{display:block}
.sheet{position:fixed;left:0;right:0;bottom:0;z-index:80;background:#fff;border-radius:14px 14px 0 0;max-height:88vh;display:flex;flex-direction:column;transform:translateY(100%);transition:transform .22s ease}
.sheet.ac{transform:none}
@media(min-width:900px){.sheet{left:auto;right:16px;bottom:16px;width:380px;border-radius:12px;max-height:84vh}}
.sheet header{background:var(--sari);padding:10px 14px;display:flex;align-items:center;gap:10px;border-radius:14px 14px 0 0;position:static}
.sheet header b{font-size:16px}
.sheet .kapat{margin-left:auto;font-size:20px;font-weight:700}
.tur{display:flex;gap:6px;padding:10px 12px 0}
.tur button{flex:1;border:1px solid var(--oran-kenar);border-radius:6px;padding:8px;font-weight:700;color:#666}
.tur button.aktif{background:var(--koyu);color:var(--sari);border-color:var(--koyu)}
.secimler{overflow-y:auto;padding:10px 12px;flex:1}
.sec{border-bottom:1px solid #eee;padding:8px 0;display:flex;gap:8px;align-items:flex-start}
.sec .ic{flex:1;min-width:0}
.sec .mac{font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sec .pz{color:var(--soluk);font-size:12px}
.sec .or{font-weight:800;min-width:44px;text-align:right}
.sec .sil{color:#bbb;font-size:17px;padding:0 2px}
.sistem-kutu{padding:0 12px 6px;display:flex;gap:6px;flex-wrap:wrap}
.sistem-kutu button{border:1px solid var(--oran-kenar);border-radius:5px;padding:6px 9px;font-weight:700;font-size:13px;color:#555}
.sistem-kutu button.aktif{background:var(--mavi);color:#fff;border-color:var(--mavi)}
.alt{border-top:1px solid var(--cizgi);padding:10px 12px;background:#fafafa}
.satirbilgi{display:flex;justify-content:space-between;padding:2px 0;color:#555}
.satirbilgi b{color:var(--metin)}
.tutar{display:flex;gap:8px;align-items:center;margin:8px 0}
.tutar input{flex:1;border:1px solid var(--oran-kenar);border-radius:6px;padding:10px;font-weight:800;font-size:16px;text-align:right;outline:none}
.tutar input:focus{border-color:var(--koyu)}
.hizli{display:flex;gap:6px;margin-bottom:8px}
.hizli button{flex:1;border:1px solid var(--oran-kenar);border-radius:5px;padding:6px;font-weight:700;color:#555;font-size:13px}
.oyna{width:100%;background:var(--yesil);color:#fff;font-weight:800;font-size:16px;padding:13px;border-radius:7px}
.oyna:disabled{background:#c7c7c7}
.hata{color:var(--kirmizi);font-weight:600;font-size:13px;margin-bottom:7px}

/* ---------- kuponlar ---------- */
.kupon{background:#fff;border:1px solid var(--cizgi);border-radius:8px;margin-bottom:10px;overflow:hidden}
.kupon .bas{display:flex;align-items:center;gap:8px;padding:9px 11px;border-bottom:1px solid #eee}
.durum{font-weight:800;font-size:12px;padding:3px 8px;border-radius:12px}
.d-bekliyor{background:#fff3cd;color:#7a5d00}
.d-kazandi{background:#d7f4e3;color:#00733a}
.d-kaybetti{background:#fbdada;color:#a4001f}
.d-iade{background:#e2e8f0;color:#41506b}
.kupon .no{color:var(--soluk);font-size:12px}
.kupon .tut{margin-left:auto;font-weight:800}
.kupon .icerik{padding:6px 11px}
.ksec{display:flex;gap:8px;padding:6px 0;border-bottom:1px dashed #eee;font-size:13px}
.ksec:last-child{border-bottom:0}
.ksec .ic{flex:1;min-width:0}
.ksec .ic div:first-child{font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ksec .pz{color:var(--soluk);font-size:12px}
.ksec .im{font-weight:800;width:18px;text-align:center}
.im.tuttu{color:var(--yesil)}.im.tutmadi{color:var(--kirmizi)}.im.bekliyor{color:#c9a400}.im.iade{color:var(--soluk)}
.kupon .ayak{background:#fafafa;border-top:1px solid #eee;padding:8px 11px;display:flex;gap:14px;flex-wrap:wrap;color:#555;font-size:13px}
.kupon .ayak b{color:var(--metin)}

/* ---------- kasa ---------- */
.kutular{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin-bottom:12px}
.kutu{background:#fff;border:1px solid var(--cizgi);border-radius:8px;padding:12px}
.kutu .etiket{color:var(--soluk);font-size:12px;font-weight:600}
.kutu .deger{font-size:21px;font-weight:800;margin-top:3px}
.deger.arti{color:var(--yesil)}.deger.eksi{color:var(--kirmizi)}
.ayar{background:#fff;border:1px solid var(--cizgi);border-radius:8px;padding:12px;margin-bottom:10px}
.ayar h3{margin:0 0 9px;font-size:15px}
.ayar label{display:block;margin-bottom:9px;color:#555;font-size:13px}
.ayar input[type=text],.ayar input[type=number]{width:100%;border:1px solid var(--oran-kenar);border-radius:6px;padding:9px;margin-top:4px;outline:none}
.ayar .sira{display:flex;gap:8px;align-items:center;margin-bottom:9px}
.dugme{background:var(--koyu);color:var(--sari);font-weight:700;padding:10px 14px;border-radius:6px}
.dugme.acik{background:#eee;color:#444}
.dugme.tehlike{background:var(--kirmizi);color:#fff}
.anahtar{display:flex;align-items:center;gap:9px;margin-bottom:10px;font-size:13px;color:#555}
.anahtar input{width:18px;height:18px}
.bos-durum{text-align:center;color:var(--soluk);padding:40px 20px}
.bos-durum div:first-child{font-size:34px;margin-bottom:8px}
.toast{position:fixed;left:50%;bottom:92px;transform:translateX(-50%);background:var(--koyu);color:#fff;padding:11px 17px;border-radius:22px;font-weight:600;z-index:100;opacity:0;transition:opacity .2s;pointer-events:none;max-width:90vw;text-align:center}
.toast.ac{opacity:1}
</style>
</head>
<body>

<header>
  <div class="ust">
    <div class="logo"><i>S</i>ANAL<span style="color:#7a6a00">İDDAA</span></div>
    <button class="yenile" id="yenileBtn" title="Verileri yenile">⟳</button>
    <div class="kasa-chip" id="kasaChip">₺ 0,00</div>
  </div>
  <nav id="nav">
    <button data-sek="bulten" class="aktif">Bülten</button>
    <button data-sek="canli">Canlı <span class="rozet" id="canliSay" hidden>0</span></button>
    <button data-sek="kuponlar">Kuponlarım <span class="rozet" id="bekleyenSay" hidden>0</span></button>
    <button data-sek="kasa">Kasa</button>
  </nav>
  <div class="filtre" id="filtreBar"></div>
</header>

<div class="kap" id="icerik"></div>

<button class="balon" id="balon" hidden>
  <span class="say" id="balonSay">0</span>
  <span>KUPON</span>
  <span id="balonOran">1,00</span>
</button>

<div class="perde" id="perde"></div>
<div class="sheet" id="sheet">
  <header>
    <b>Kuponum</b>
    <button class="kapat" id="sheetKapat">×</button>
  </header>
  <div class="tur">
    <button data-tur="kombine" class="aktif">Kombine</button>
    <button data-tur="sistem">Sistem</button>
  </div>
  <div class="sistem-kutu" id="sistemKutu" hidden></div>
  <div class="secimler" id="secimler"></div>
  <div class="alt" id="kuponAlt"></div>
</div>

<div class="toast" id="toast"></div>

<script>
/* =========================================================
   0) Ayarlar, depolama
   ========================================================= */
const VARSAYILAN_AYAR = {
  kullanici:'winormeow-arch', depo:'sanal-iddaa', dal:'main',
  baslangic:10000, minBahis:50, canliMotor:true, marj:0.07
};
const ANAHTAR = 'sanaliddaa_v1';
let S = { bakiye:0, kuponlar:[], ayar:{...VARSAYILAN_AYAR}, kurulum:false, sayac:1 };

function yukle(){
  try{
    const h = localStorage.getItem(ANAHTAR);
    if(h){ const o = JSON.parse(h); S = {...S, ...o, ayar:{...VARSAYILAN_AYAR, ...(o.ayar||{})}}; }
  }catch(e){}
  if(!S.kurulum){ S.bakiye = S.ayar.baslangic; S.kurulum = true; kaydet(); }
}
function kaydet(){ try{ localStorage.setItem(ANAHTAR, JSON.stringify(S)); }catch(e){} }

const TL = n => (n||0).toLocaleString('tr-TR',{minimumFractionDigits:2,maximumFractionDigits:2});
const OR = n => (n||0).toLocaleString('tr-TR',{minimumFractionDigits:2,maximumFractionDigits:2});
const kacir = s => String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

let toastZ;
function toast(m){
  const t = document.getElementById('toast');
  t.textContent = m; t.classList.add('ac');
  clearTimeout(toastZ); toastZ = setTimeout(()=>t.classList.remove('ac'), 2400);
}

/* =========================================================
   1) Veri
   ========================================================= */
let VERI = { maclar:{}, sonuclar:{}, guncel:null, kaynak:'' };

function rawUrl(dosya){
  const a = S.ayar;
  return `https://raw.githubusercontent.com/${a.kullanici}/${a.depo}/${a.dal}/data/${dosya}`;
}
async function jsonAl(url){
  const r = await fetch(url + (url.includes('?')?'&':'?') + 't=' + Date.now(), {cache:'no-store'});
  if(!r.ok) throw new Error(r.status);
  return r.json();
}
async function veriYenile(sessiz){
  const btn = document.getElementById('yenileBtn');
  btn.classList.add('doner');
  const denemeler = [
    {ad:'depo', b:'data/bulten.json', s:'data/sonuclar.json'},
    {ad:'github', b:rawUrl('bulten.json'), s:rawUrl('sonuclar.json')}
  ];
  let oldu = false;
  for(const d of denemeler){
    try{
      const b = await jsonAl(d.b);
      let s = {sonuclar:{}};
      try{ s = await jsonAl(d.s); }catch(e){}
      VERI = { maclar:b.maclar||{}, sonuclar:s.sonuclar||{}, guncel:b.guncel, kaynak:d.ad };
      oldu = true; break;
    }catch(e){}
  }
  if(!oldu && !Object.keys(VERI.maclar).length){ VERI = demoVeri(); }
  btn.classList.remove('doner');
  if(typeof durumTazele==='function') durumTazele();
  sonuclandir();
  ciz();
  if(!sessiz) toast(oldu ? 'Bülten güncellendi' : 'Veri alınamadı — demo bülten gösteriliyor');
}

/* Veri yokken site çalışsın diye küçük bir demo bülten */
function demoVeri(){
  const t = new Date(Date.now()+3*3600e3).toISOString().slice(0,10);
  const mk = (id,lig,ev,dep,dk,mbs,o,ek)=>({id,kod:id,mbs,lig,ev,dep,tarih:t,saat:'21:45',
    bas:Date.now()+dk*60000, durum: dk>0?'bekliyor':'canli', dk: dk>0?0:Math.min(85,-dk), iy:'', ms: dk>0?'':'1-0',
    oran:o, oranGuncel:Date.now(), ...ek});
  const o1 = {'MS':{'1':'1.30','X':'4.10','2':'6.23'},'AÜ 2,5':{'Alt':'1.91','Üst':'1.53'},'KG':{'Var':'1.72','Yok':'1.68'},
    'ÇŞ':{'1-X':'1.08','1-2':'2.39','X-2':'2.39'},'İY MS':{'1':'1.93','X':'3.34','2':'2.39'},'Tek/Çift':{'Tek':'1.90','Çift':'1.85'}};
  const o2 = {'MS':{'1':'2.13','X':'3.12','2':'2.38'},'AÜ 2,5':{'Alt':'1.94','Üst':'1.44'},'KG':{'Var':'1.36','Yok':'2.11'},
    'ÇŞ':{'1-X':'1.26','1-2':'1.14','X-2':'1.34'},'İY MS':{'1':'3.88','X':'3.84','2':'1.33'},'Tek/Çift':{'Tek':'1.88','Çift':'1.87'}};
  const o3 = {'MS':{'1':'1.99','X':'2.62','2':'3.05'},'AÜ 2,5':{'Alt':'1.29','Üst':'2.31'},'KG':{'Var':'1.93','Yok':'1.44'},
    'ÇŞ':{'1-X':'1.14','1-2':'1.21','X-2':'1.39'}};
  const M = {};
  [ mk('9001','Portekiz - Premier Lig','Braga','Estoril Praia',180,'1',o1),
    mk('9002','ABD - MLS Next Pro','Portland Timbers II','Saint Louis City SC 2',260,'3',o2),
    mk('9003','Brezilya - Serie B','Botafogo','Goias GO',-38,'3',o3),
    mk('9004','Arjantin - Primera','Banfield','Barracas',400,'2',o2),
  ].forEach(m=>M[m.id]=m);
  return { maclar:M, sonuclar:{}, guncel:new Date().toISOString(), kaynak:'demo' };
}

/* =========================================================
   2) Market tanımları ve sonuç hesabı
   ========================================================= */
const MARKET_SIRA = ['MS','ÇŞ','AÜ 0,5','AÜ 1,5','AÜ 2,5','AÜ 3,5','AÜ 4,5','KG','Tek/Çift',
  'HND 1:0','HND 0:1','HND 2:0','HND 0:2','İY MS','İY AÜ 0,5','İY AÜ 1,5'];
const MARKET_AD = {'MS':'Maç Sonucu','ÇŞ':'Çifte Şans','KG':'Karşılıklı Gol','Tek/Çift':'Tek / Çift',
  'İY MS':'İlk Yarı Sonucu'};
const marketAdi = k => MARKET_AD[k] || (k.startsWith('İY AÜ') ? 'İlk Yarı '+k.slice(3) : k.startsWith('AÜ') ? k.replace('AÜ','Alt/Üst') : k.startsWith('HND') ? 'Handikaplı ('+k.slice(4)+')' : k);
const SEC_SIRA = {'MS':['1','X','2'],'ÇŞ':['1-X','1-2','X-2'],'KG':['Var','Yok'],'Tek/Çift':['Tek','Çift'],
  'İY MS':['1','X','2']};
const secimSira = k => SEC_SIRA[k] || (k.startsWith('HND')||k==='İY MS' ? ['1','X','2'] : ['Alt','Üst']);
// Canlıda oynanabilen marketler (ilk yarı marketleri canlıda kapalı)
const CANLI_MARKET = k => !k.startsWith('İY');

function marketSonuc(market, secim, ms, iy){
  if(!ms || !/^\d+-\d+$/.test(ms)) return null;
  const [eg,dg] = ms.split('-').map(Number);
  const t = eg+dg;
  const r = eg>dg?'1':eg<dg?'2':'X';
  const iyVar = /^\d+-\d+$/.test(iy||'');
  const [ie,id] = iyVar ? iy.split('-').map(Number) : [0,0];

  if(market==='MS') return secim===r;
  if(market==='ÇŞ') return secim.split('-').includes(r);
  if(market==='KG') return (eg>0&&dg>0)===(secim==='Var');
  if(market==='Tek/Çift') return (t%2===1)===(secim==='Tek');
  if(market==='İY MS'){ if(!iyVar) return null; const ir = ie>id?'1':ie<id?'2':'X'; return secim===ir; }
  if(market.startsWith('İY AÜ')){
    if(!iyVar) return null;
    const e = parseFloat(market.replace('İY AÜ','').replace(',','.'));
    return secim==='Üst' ? (ie+id)>e : (ie+id)<e;
  }
  if(market.startsWith('AÜ')){
    const e = parseFloat(market.replace('AÜ','').replace(',','.'));
    return secim==='Üst' ? t>e : t<e;
  }
  if(market.startsWith('HND')){
    const [a,b] = market.slice(4).split(':').map(Number);
    const h = eg+a, d = dg+b;
    const hr = h>d?'1':h<d?'2':'X';
    return secim===hr;
  }
  return null;
}

/* =========================================================
   3) Canlı oran motoru (Poisson)
   ========================================================= */
const FAK = [1,1,2,6,24,120,720,5040,40320,362880,3628800];
const pois = (k,l) => Math.exp(-l)*Math.pow(l,k)/FAK[k];
const lamOnbellek = new Map();

function lambdaCoz(oran){
  const ms = oran['MS'];
  if(!ms || !ms['1'] || !ms['X'] || !ms['2']) return null;
  const ham = [1/+ms['1'], 1/+ms['X'], 1/+ms['2']];
  const top = ham[0]+ham[1]+ham[2];
  const hedef = ham.map(v=>v/top);
  let hedefUst = null;
  const au = oran['AÜ 2,5'];
  if(au && au['Alt'] && au['Üst']){ const a=1/+au['Alt'], u=1/+au['Üst']; hedefUst = u/(a+u); }

  const dene = (lh,la)=>{
    let p1=0,px=0,p2=0,ust=0;
    for(let i=0;i<=8;i++){ const a=pois(i,lh);
      for(let j=0;j<=8;j++){ const p=a*pois(j,la);
        if(i>j)p1+=p; else if(i===j)px+=p; else p2+=p;
        if(i+j>2.5)ust+=p;
      }}
    let h = (p1-hedef[0])**2 + (px-hedef[1])**2 + (p2-hedef[2])**2;
    if(hedefUst!=null) h += 2*(ust-hedefUst)**2;
    return h;
  };
  let en={h:1e9,lh:1.3,la:1.1};
  for(let lh=0.2; lh<=3.6; lh+=0.1)
    for(let la=0.2; la<=3.6; la+=0.1){
      const h = dene(lh,la);
      if(h<en.h) en={h,lh,la};
    }
  for(let lh=Math.max(0.05,en.lh-0.1); lh<=en.lh+0.1; lh+=0.025)
    for(let la=Math.max(0.05,en.la-0.1); la<=en.la+0.1; la+=0.025){
      const h = dene(lh,la);
      if(h<en.h) en={h,lh,la};
    }
  return {lh:en.lh, la:en.la};
}

function canliOranlar(mac){
  const k = mac.id+'|'+(mac.oranGuncel||0);
  let lam = lamOnbellek.get(k);
  if(lam===undefined){ lam = lambdaCoz(mac.oran||{}); lamOnbellek.set(k,lam); }
  if(!lam) return null;
  const skor = /^\d+-\d+$/.test(mac.ms||'') ? mac.ms.split('-').map(Number) : [0,0];
  const dk = Math.max(0, Math.min(90, mac.dk||0));
  const f = Math.max(0.02, (90-dk)/90);
  const lh = lam.lh*f, la = lam.la*f;
  const [ge,gd] = skor;

  const P = {ms:{'1':0,'X':0,'2':0}, au:{}, kg:{'Var':0,'Yok':0}, tc:{'Tek':0,'Çift':0}, hnd:{}};
  const ESIK = [0.5,1.5,2.5,3.5,4.5];
  ESIK.forEach(e=>P.au[e]={Alt:0,Üst:0});
  const HND = [[1,0],[0,1],[2,0],[0,2]];
  HND.forEach(h=>P.hnd[h.join(':')]={'1':0,'X':0,'2':0});

  for(let i=0;i<=8;i++){ const a=pois(i,lh);
    for(let j=0;j<=8;j++){
      const p = a*pois(j,la);
      const e = ge+i, d = gd+j, t = e+d;
      P.ms[e>d?'1':e<d?'2':'X'] += p;
      ESIK.forEach(x=>{ P.au[x][t>x?'Üst':'Alt'] += p; });
      P.kg[(e>0&&d>0)?'Var':'Yok'] += p;
      P.tc[t%2===1?'Tek':'Çift'] += p;
      HND.forEach(h=>{ const he=e+h[0], hd=d+h[1]; P.hnd[h.join(':')][he>hd?'1':he<hd?'2':'X'] += p; });
    }}

  const marj = S.ayar.marj||0.07;
  const o = p => { const v = p>0.0001 ? (1/p)*(1-marj) : 0; return v>=1.01 && v<=40 ? v.toFixed(2) : null; };
  const cikti = {};
  const ekle = (ad,obj)=>{ const h={}; let v=false; for(const [k2,p] of Object.entries(obj)){ const x=o(p); if(x){h[k2]=x;v=true;} } if(v) cikti[ad]=h; };
  ekle('MS',P.ms);
  ekle('ÇŞ',{'1-X':P.ms['1']+P.ms['X'],'1-2':P.ms['1']+P.ms['2'],'X-2':P.ms['X']+P.ms['2']});
  ESIK.forEach(e=>ekle('AÜ '+String(e).replace('.',','),P.au[e]));
  ekle('KG',P.kg);
  ekle('Tek/Çift',P.tc);
  HND.forEach(h=>ekle('HND '+h.join(':'),P.hnd[h.join(':')]));
  return cikti;
}

// Bir maç için o an geçerli oran tablosu
function macOranlari(mac){
  const n = (typeof nesineOrani==='function') ? nesineOrani(mac) : null;
  if(n){
    const o = {};
    for(const [k,v] of Object.entries(n.oran)){
      if(mac.durum==='canli' && !CANLI_MARKET(k)) continue;
      o[k] = v;
    }
    if(Object.keys(o).length) return {oran:o, canli: mac.durum==='canli', kaynak:'nesine'};
  }
  if(mac.durum==='canli' && S.ayar.canliMotor){
    const c = canliOranlar(mac);
    if(c) return {oran:c, canli:true};
  }
  const o = {};
  for(const [k,v] of Object.entries(mac.oran||{})){
    if(mac.durum==='canli' && !CANLI_MARKET(k)) continue;
    o[k]=v;
  }
  return {oran:o, canli: mac.durum==='canli'};
}

/* =========================================================
   4) Kupon (sepet)
   ========================================================= */
let K = { secimler:[], tur:'kombine', sistem:[], tutar:S.ayar.minBahis };

const kuponOran = () => K.secimler.reduce((a,s)=>a*(+s.oran),1);
const maxMbs = () => K.secimler.reduce((a,s)=>Math.max(a, +(s.mbs||1)||1),1);

function secimEkle(mac, market, secim, oran, canli){
  const v = K.secimler.findIndex(s=>s.macId===mac.id);
  const yeni = {
    macId:mac.id, ev:mac.ev, dep:mac.dep, lig:mac.lig, tarih:mac.tarih, saat:mac.saat,
    market, secim, oran:String(oran), mbs:mac.mbs||'1', canli:!!canli,
    anSkor: canli?(mac.ms||'0-0'):'', anDk: canli?(mac.dk||0):0
  };
  if(v>=0){
    const eski = K.secimler[v];
    if(eski.market===market && eski.secim===secim){ K.secimler.splice(v,1); }
    else K.secimler[v]=yeni;
  } else K.secimler.push(yeni);
  sistemDuzelt();
  ciz();
}
function secimVarMi(macId, market, secim){
  return K.secimler.some(s=>s.macId===macId && s.market===market && s.secim===secim);
}
function sistemDuzelt(){
  const n = K.secimler.length;
  K.sistem = K.sistem.filter(x=>x>=2 && x<=n);
  if(K.tur==='sistem' && !K.sistem.length && n>=3) K.sistem=[n-1];
}
const kombinasyon = (n,r)=>{ let s=1; for(let i=0;i<r;i++) s = s*(n-i)/(i+1); return Math.round(s); };
function kombinasyonlar(dizi,r){
  const out=[]; const ic=(bas,cur)=>{ if(cur.length===r){out.push(cur.slice());return;} for(let i=bas;i<dizi.length;i++){cur.push(i);ic(i+1,cur);cur.pop();} };
  ic(0,[]); return out;
}
function kuponHesap(){
  const n = K.secimler.length;
  const min = S.ayar.minBahis;
  if(K.tur==='kombine'){
    const sayi = n?1:0;
    return { sayi, birim:K.tutar, toplam:K.tutar, maxKazanc: n?K.tutar*kuponOran():0 };
  }
  const sayi = K.sistem.reduce((a,r)=>a+kombinasyon(n,r),0);
  const birim = sayi? K.tutar/sayi : 0;
  let max = 0;
  for(const r of K.sistem){
    for(const komb of kombinasyonlar(K.secimler,r)){
      max += birim * komb.reduce((a,i)=>a*(+K.secimler[i].oran),1);
    }
  }
  return { sayi, birim, toplam:K.tutar, maxKazanc:max };
}
function kuponHata(){
  const n = K.secimler.length;
  const h = kuponHesap();
  if(!n) return 'Kupona en az bir maç ekleyin.';
  if(K.tutar < S.ayar.minBahis) return `En az ${TL(S.ayar.minBahis)} TL oynanabilir.`;
  if(K.tutar > S.bakiye) return 'Bakiye yetersiz.';
  const mbs = maxMbs();
  if(K.tur==='kombine' && n < mbs) return `Kuponda MBS ${mbs} maç var — en az ${mbs} maç seçmelisiniz.`;
  if(K.tur==='sistem'){
    if(!K.sistem.length) return 'Sistem türü seçin.';
    const kucuk = Math.min(...K.sistem);
    if(kucuk < mbs) return `MBS ${mbs} nedeniyle en küçük sistem ${mbs}'li olmalı.`;
    if(h.birim < 1) return 'Kombinasyon başına en az 1 TL düşmeli, tutarı artırın.';
  }
  // başlamış maçlar
  const bitti = K.secimler.filter(s=>{ const m=VERI.maclar[s.macId]; return !m || m.durum==='bitti' || m.durum==='iptal'; });
  if(bitti.length) return 'Kuponda biten/iptal maç var, çıkarın.';
  return null;
}

function kuponOyna(){
  const hata = kuponHata();
  if(hata){ toast(hata); return; }
  const h = kuponHesap();
  const kupon = {
    no: S.sayac++, zaman: Date.now(), tur:K.tur,
    sistem: K.tur==='sistem'? K.sistem.slice():[],
    tutar:K.tutar, birim:h.birim, kombinasyonSayisi:h.sayi,
    maxKazanc:h.maxKazanc, kazanc:0, durum:'bekliyor',
    secimler: K.secimler.map(s=>({...s, sonuc:'bekliyor'}))
  };
  S.bakiye -= K.tutar;
  S.kuponlar.unshift(kupon);
  K.secimler = []; K.sistem=[]; K.tutar = S.ayar.minBahis;
  kaydet();
  sheetKapat();
  toast(`Kupon oynandı — ${TL(kupon.tutar)} TL düşüldü`);
  ciz();
}

/* =========================================================
   5) Sonuçlandırma
   ========================================================= */
function macSonucu(macId){
  const s = VERI.sonuclar[macId];
  if(s && (s.durum==='iptal' || /^\d+-\d+$/.test(s.ms||''))) return s;
  const m = VERI.maclar[macId];
  if(!m) return null;
  if(m.durum==='iptal') return {ms:'', iy:'', durum:'iptal'};
  if(m.durum==='bitti' && /^\d+-\d+$/.test(m.ms||'')) return {ms:m.ms, iy:m.iy, durum:'bitti'};
  return null;
}
function sonuclandir(){
  let degisti = false, kazanan = 0;
  for(const k of S.kuponlar){
    if(k.durum!=='bekliyor') continue;
    let hepsiBitti = true;
    for(const s of k.secimler){
      if(s.sonuc!=='bekliyor') continue;
      const r = macSonucu(s.macId);
      if(!r){ hepsiBitti=false; continue; }
      if(r.durum==='iptal' || !r.ms){ s.sonuc='iade'; degisti=true; continue; }
      const c = marketSonuc(s.market, s.secim, r.ms, r.iy);
      if(c===null){ s.sonuc='iade'; }
      else s.sonuc = c ? 'tuttu':'tutmadi';
      s.skor = r.ms; s.iySkor = r.iy||'';
      degisti = true;
    }
    if(!hepsiBitti) continue;
    if(k.secimler.some(s=>s.sonuc==='bekliyor')) continue;

    const carpan = s => s.sonuc==='iade' ? 1 : +s.oran;
    let kazanc = 0;
    if(k.tur==='kombine'){
      kazanc = k.secimler.every(s=>s.sonuc!=='tutmadi')
        ? k.tutar * k.secimler.reduce((a,s)=>a*carpan(s),1) : 0;
    } else {
      for(const r of k.sistem){
        for(const komb of kombinasyonlar(k.secimler,r)){
          const sec = komb.map(i=>k.secimler[i]);
          if(sec.every(s=>s.sonuc!=='tutmadi')) kazanc += k.birim * sec.reduce((a,s)=>a*carpan(s),1);
        }
      }
    }
    kazanc = Math.round(kazanc*100)/100;
    k.kazanc = kazanc;
    k.durum = kazanc>0 ? 'kazandi' : 'kaybetti';
    if(k.secimler.every(s=>s.sonuc==='iade')) k.durum='iade';
    if(kazanc>0){ S.bakiye += kazanc; kazanan += kazanc; }
    k.bitisZaman = Date.now();
    degisti = true;
  }
  if(degisti){ kaydet(); if(kazanan>0) setTimeout(()=>toast(`Kazanç yatırıldı: ${TL(kazanan)} TL`), 600); }
}

/* =========================================================
   6) Arayüz
   ========================================================= */
let sekme='bulten';
let filtre = { gun:'hepsi', ara:'', marketler:['MS','AÜ 2,5','KG'] };
const acikDetay = new Set();

function macListesi(canliMi){
  const simdi = Date.now();
  let ms = Object.values(VERI.maclar);
  ms = ms.filter(m=>{
    if(canliMi) return m.durum==='canli';
    return m.durum==='bekliyor' || m.durum==='canli';
  });
  if(!canliMi && filtre.gun!=='hepsi') ms = ms.filter(m=>m.tarih===filtre.gun);
  if(filtre.ara){
    const a = filtre.ara.toLocaleLowerCase('tr');
    ms = ms.filter(m=>(m.ev+' '+m.dep+' '+m.lig).toLocaleLowerCase('tr').includes(a));
  }
  ms.sort((a,b)=>(a.bas-b.bas) || a.lig.localeCompare(b.lig,'tr'));
  return ms;
}
function gunler(){
  const g = [...new Set(Object.values(VERI.maclar).filter(m=>m.durum!=='bitti').map(m=>m.tarih))].sort();
  return g.slice(0,5);
}
const gunAdi = t => {
  const bugun = new Date(Date.now()+3*3600e3).toISOString().slice(0,10);
  const yarin = new Date(Date.now()+27*3600e3).toISOString().slice(0,10);
  if(t===bugun) return 'Bugün';
  if(t===yarin) return 'Yarın';
  const d = new Date(t+'T12:00:00Z');
  return d.toLocaleDateString('tr-TR',{day:'2-digit',month:'2-digit'});
};

function filtreCiz(){
  const el = document.getElementById('filtreBar');
  if(sekme==='bulten'){
    const g = gunler();
    el.hidden = false;
    el.innerHTML =
      `<button class="cip ${filtre.gun==='hepsi'?'aktif':''}" data-gun="hepsi">Tümü</button>` +
      g.map(t=>`<button class="cip ${filtre.gun===t?'aktif':''}" data-gun="${t}">${gunAdi(t)}</button>`).join('') +
      `<input class="ara" id="araKutu" placeholder="Takım / lig ara" value="${kacir(filtre.ara)}">` +
      MARKET_SIRA.filter(k=>['MS','ÇŞ','AÜ 1,5','AÜ 2,5','AÜ 3,5','KG','Tek/Çift','İY MS'].includes(k))
        .map(k=>`<button class="cip ${filtre.marketler.includes(k)?'aktif':''}" data-market="${k}">${k}</button>`).join('');
  } else if(sekme==='kuponlar'){
    el.hidden = false;
    const t = kuponFiltre;
    el.innerHTML = [['hepsi','Tümü'],['bekliyor','Bekleyen'],['kazandi','Kazanan'],['kaybetti','Kaybeden'],['iade','İade']]
      .map(([k,a])=>`<button class="cip ${t===k?'aktif':''}" data-kfiltre="${k}">${a}</button>`).join('');
  } else el.hidden = true;
}

function oranKutu(mac, market, secim, oran, secili){
  if(!oran) return `<div class="ob bos"><span>${kacir(secim)}</span>-</div>`;
  return `<button class="ob ${secili?'secili':''}" data-mac="${mac.id}" data-market="${kacir(market)}" data-secim="${kacir(secim)}" data-oran="${oran}">
    <span>${kacir(secim)}</span>${OR(+oran)}</button>`;
}

function macSatiri(m){
  const {oran, canli} = macOranlari(m);
  const oynanabilir = m.durum==='bekliyor' || m.durum==='canli';
  const mbs = +(m.mbs||0);
  const saatHtml = m.durum==='canli'
    ? `<div class="saat"><span class="canli-rozet">${m.dk||''}'</span><small>CANLI</small></div>`
    : `<div class="saat">${kacir(m.saat||'')}<small>${gunAdi(m.tarih)}</small></div>`;
  const skor = m.durum==='canli' && m.ms ? ` <span class="skor">${kacir(m.ms)}</span>` : '';
  let kutular = '';
  for(const mk of filtre.marketler){
    const o = oran[mk];
    for(const s of secimSira(mk)) kutular += oranKutu(m, mk, s, o&&o[s], secimVarMi(m.id,mk,s));
    kutular += '<div style="width:6px;flex:none"></div>';
  }
  const acik = acikDetay.has(m.id);
  return `<div class="satir">
    <div class="sol">
      ${saatHtml}
      <div class="mbs mbs${mbs||0}">${mbs||'-'}</div>
      <div class="takimlar">
        <div>${kacir(m.ev)}${skor}</div>
        <div style="color:var(--soluk);font-weight:500">${kacir(m.dep)}</div>
      </div>
    </div>
    ${oynanabilir?`<div class="oranlar">${kutular}</div>
    <button class="arti" data-detay="${m.id}">${acik?'−':'+'}</button>`:'<div class="oranlar" style="color:var(--soluk);padding-right:12px">Bitti ' + kacir(m.ms||'') + '</div>'}
  </div>
  ${acik?detayHtml(m,oran,canli):''}`;
}

function detayHtml(m, oran, canli){
  const gruplar = MARKET_SIRA.filter(k=>oran[k]).map(k=>{
    const kutular = secimSira(k).map(s=>oranKutu(m,k,s,oran[k][s],secimVarMi(m.id,k,s))).join('');
    return `<div class="mgrup"><h4>${kacir(marketAdi(k))}</h4><div class="satirlar">${kutular}</div></div>`;
  }).join('');
  const kaynakNesine = (typeof nesineOrani==='function') && nesineOrani(m);
  const not = kaynakNesine
    ? '<div style="color:var(--yesil);font-size:12px;font-weight:600;margin-bottom:7px">Oranlar Nesine\'den canlı geliyor.</div>'
    : (canli && S.ayar.canliMotor
      ? '<div style="color:var(--soluk);font-size:12px;margin-bottom:7px">Nesine köprüsü kapalı — oranlar skora göre tahmini hesaplandı.</div>' : '');
  return `<div class="detay">${not}${gruplar||'<div style="color:var(--soluk)">Bu maç için oran yok.</div>'}</div>`;
}

function bultenCiz(canliMi){
  const ms = macListesi(canliMi);
  if(!ms.length){
    return `<div class="bos-durum"><div>⚽</div><div>${canliMi?'Şu an oynanan maç yok.':'Bültende maç yok. Sağ üstteki ⟳ ile veriyi yenileyin.'}</div></div>`;
  }
  let html = '';
  if(VERI.kaynak==='demo') html += `<div class="bilgi uyari"><b>Demo bülten.</b> Gerçek veri için Kasa → Ayarlar'dan GitHub kullanıcı adı ve depo adını kontrol edin.</div>`;
  else if(VERI.guncel){
    const kopruAktif = NESINE && (Date.now()-(NESINE.guncel||0) < 2*60000);
    const eslesen = kopruAktif ? NESINE_ESLEME.size : 0;
    html += `<div class="bilgi">Bülten <b>${new Date(VERI.guncel).toLocaleString('tr-TR',{hour:'2-digit',minute:'2-digit',day:'2-digit',month:'2-digit'})}</b> itibarıyla · ${Object.keys(VERI.maclar).length} maç`
      + (kopruAktif
          ? ` · <b style="color:var(--yesil)">Nesine canlı oran açık (${eslesen} maç)</b>`
          : ` · <b style="color:var(--turuncu)">Nesine köprüsü kapalı</b> — canlı oranlar tahmini`)
      + `</div>`;
  }
  let ligAd = null;
  let grup = [];
  const kapat = ()=>{ if(grup.length){ html += `<div class="lig">${kacir(ligAd)}<span class="adet">${grup.length} maç</span></div><div class="grup">${grup.join('')}</div>`; grup=[]; } };
  for(const m of ms){
    if(m.lig!==ligAd){ kapat(); ligAd = m.lig; }
    grup.push(macSatiri(m));
  }
  kapat();
  return html;
}

let kuponFiltre = 'hepsi';
function kuponlarCiz(){
  let ks = S.kuponlar;
  if(kuponFiltre!=='hepsi') ks = ks.filter(k=>k.durum===kuponFiltre);
  if(!ks.length) return `<div class="bos-durum"><div>🧾</div><div>Burada kupon yok.</div></div>`;
  const im = {tuttu:'✓',tutmadi:'✕',bekliyor:'•',iade:'↺'};
  const durumAd = {bekliyor:'BEKLİYOR',kazandi:'KAZANDI',kaybetti:'KAYBETTİ',iade:'İADE'};
  return ks.map(k=>{
    const secler = k.secimler.map(s=>{
      const m = VERI.maclar[s.macId];
      const anlik = m && m.durum==='canli' && m.ms ? ` · canlı ${m.ms}` : '';
      return `<div class="ksec">
        <div class="im ${s.sonuc}">${im[s.sonuc]}</div>
        <div class="ic">
          <div>${kacir(s.ev)} - ${kacir(s.dep)}</div>
          <div class="pz">${kacir(marketAdi(s.market))}: <b>${kacir(s.secim)}</b>${s.canli?' (canlı '+kacir(s.anSkor)+' '+s.anDk+"')":''}${s.skor?' · sonuç '+kacir(s.skor):anlik}</div>
        </div>
        <div class="or">${OR(+s.oran)}</div>
      </div>`;
    }).join('');
    const sistemAd = k.tur==='sistem' ? `Sistem ${k.sistem.join('/')} (${k.kombinasyonSayisi} kolon)` : `Kombine ${k.secimler.length} maç`;
    return `<div class="kupon">
      <div class="bas">
        <span class="durum d-${k.durum}">${durumAd[k.durum]}</span>
        <span class="no">#${k.no} · ${new Date(k.zaman).toLocaleString('tr-TR',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})}</span>
        <span class="tut">${TL(k.tutar)} ₺</span>
      </div>
      <div class="icerik">${secler}</div>
      <div class="ayak">
        <span>${sistemAd}</span>
        <span>${k.tur==='kombine'?'Toplam oran':'Kolon başına'} <b>${k.tur==='kombine'?OR(k.secimler.reduce((a,s)=>a*(+s.oran),1)):TL(k.birim)+' ₺'}</b></span>
        <span>${k.durum==='bekliyor'?'Maks. kazanç':'Kazanç'} <b>${TL(k.durum==='bekliyor'?k.maxKazanc:k.kazanc)} ₺</b></span>
      </div>
    </div>`;
  }).join('');
}

function kasaCiz(){
  const ks = S.kuponlar;
  const biten = ks.filter(k=>k.durum!=='bekliyor');
  const yatirilan = ks.reduce((a,k)=>a+k.tutar,0);
  const kazanilan = ks.reduce((a,k)=>a+(k.kazanc||0),0);
  const bekleyen = ks.filter(k=>k.durum==='bekliyor');
  const kar = S.bakiye + bekleyen.reduce((a,k)=>a+k.tutar,0) - S.ayar.baslangic;
  const tutan = biten.filter(k=>k.durum==='kazandi').length;
  const yuzde = biten.length ? Math.round(tutan/biten.length*100) : 0;
  const a = S.ayar;
  return `
  <div class="kutular">
    <div class="kutu"><div class="etiket">Bakiye</div><div class="deger">${TL(S.bakiye)} ₺</div></div>
    <div class="kutu"><div class="etiket">Bekleyen bahis</div><div class="deger">${TL(bekleyen.reduce((x,k)=>x+k.tutar,0))} ₺</div></div>
    <div class="kutu"><div class="etiket">Kâr / Zarar</div><div class="deger ${kar>=0?'arti':'eksi'}">${kar>=0?'+':''}${TL(kar)} ₺</div></div>
    <div class="kutu"><div class="etiket">Tutma oranı</div><div class="deger">%${yuzde}</div></div>
    <div class="kutu"><div class="etiket">Toplam yatırılan</div><div class="deger">${TL(yatirilan)} ₺</div></div>
    <div class="kutu"><div class="etiket">Toplam kazanılan</div><div class="deger">${TL(kazanilan)} ₺</div></div>
  </div>

  <div class="ayar">
    <h3>Kasa</h3>
    <div class="sira">
      <input type="number" id="ekleTutar" value="1000" step="100" style="flex:1">
      <button class="dugme" id="paraEkle">Sanal para ekle</button>
    </div>
    <div class="sira">
      <button class="dugme acik" id="kuponSil">Kuponları temizle</button>
      <button class="dugme tehlike" id="sifirla">Her şeyi sıfırla</button>
    </div>
  </div>

  <div class="ayar">
    <h3>Ayarlar</h3>
    <label>GitHub kullanıcı adı<input type="text" id="aKullanici" value="${kacir(a.kullanici)}"></label>
    <label>Depo adı<input type="text" id="aDepo" value="${kacir(a.depo)}"></label>
    <label>Dal (branch)<input type="text" id="aDal" value="${kacir(a.dal)}"></label>
    <label>Başlangıç kasası (₺)<input type="number" id="aBaslangic" value="${a.baslangic}"></label>
    <label>En az bahis tutarı (₺)<input type="number" id="aMin" value="${a.minBahis}"></label>
    <label>Canlı oran marjı (0.07 = %7)<input type="number" id="aMarj" step="0.01" value="${a.marj}"></label>
    <div class="anahtar"><input type="checkbox" id="aCanli" ${a.canliMotor?'checked':''}><span>Canlı maçlarda oranları skora göre yeniden hesapla (kapalıysa maç öncesi oran kullanılır)</span></div>
    <button class="dugme" id="ayarKaydet">Ayarları kaydet</button>
  </div>

  <div class="bilgi">Veri kaynağı: <b>${VERI.kaynak==='depo'?'aynı depo (data/bulten.json)':VERI.kaynak==='github'?'raw.githubusercontent.com':'demo'}</b>${VERI.guncel?' · son güncelleme '+new Date(VERI.guncel).toLocaleString('tr-TR'):''}</div>`;
}

/* ---------- kupon paneli ---------- */
function kuponCiz(){
  const n = K.secimler.length;
  document.getElementById('balon').hidden = n===0;
  document.getElementById('balonSay').textContent = n;
  document.getElementById('balonOran').textContent = OR(kuponOran());
  document.getElementById('kasaChip').textContent = '₺ ' + TL(S.bakiye);
  const bek = S.kuponlar.filter(k=>k.durum==='bekliyor').length;
  const bs = document.getElementById('bekleyenSay');
  bs.hidden = !bek; bs.textContent = bek;
  const cs = document.getElementById('canliSay');
  const cn = Object.values(VERI.maclar).filter(m=>m.durum==='canli').length;
  cs.hidden = !cn; cs.textContent = cn;

  document.querySelectorAll('.tur button').forEach(b=>b.classList.toggle('aktif', b.dataset.tur===K.tur));

  const sk = document.getElementById('sistemKutu');
  if(K.tur==='sistem' && n>=3){
    sk.hidden = false;
    let h = '';
    for(let r=2;r<n;r++) h += `<button data-sistem="${r}" class="${K.sistem.includes(r)?'aktif':''}">${r}/${n} <small>(${kombinasyon(n,r)})</small></button>`;
    sk.innerHTML = h;
  } else { sk.hidden = true; sk.innerHTML=''; }

  const el = document.getElementById('secimler');
  el.innerHTML = n ? K.secimler.map((s,i)=>`
    <div class="sec">
      <div class="ic">
        <div class="mac">${kacir(s.ev)} - ${kacir(s.dep)}</div>
        <div class="pz">${kacir(marketAdi(s.market))}: <b>${kacir(s.secim)}</b> ${s.canli?'· CANLI':'· '+kacir(s.saat)}  ${+s.mbs>1?'· MBS '+s.mbs:''}</div>
      </div>
      <div class="or">${OR(+s.oran)}</div>
      <button class="sil" data-sil="${i}">×</button>
    </div>`).join('') : `<div class="bos-durum" style="padding:26px"><div>🎟️</div><div>Bülten'den oran seçin.</div></div>`;

  const h = kuponHesap();
  const hata = kuponHata();
  document.getElementById('kuponAlt').innerHTML = `
    ${K.tur==='sistem'?`<div class="satirbilgi"><span>Kolon sayısı</span><b>${h.sayi}</b></div>
      <div class="satirbilgi"><span>Kolon başına</span><b>${TL(h.birim)} ₺</b></div>`
      :`<div class="satirbilgi"><span>Toplam oran</span><b>${OR(kuponOran())}</b></div>`}
    <div class="satirbilgi"><span>Maç sayısı</span><b>${n}${maxMbs()>1?' · MBS '+maxMbs():''}</b></div>
    <div class="tutar">
      <span style="color:#666;font-weight:600">Tutar</span>
      <input type="number" id="tutarKutu" value="${K.tutar}" min="${S.ayar.minBahis}" step="10">
      <span style="font-weight:800">₺</span>
    </div>
    <div class="hizli">
      ${[50,100,250,500].map(v=>`<button data-tutar="${v}">${v}</button>`).join('')}
      <button data-tutar="max">Maks</button>
    </div>
    <div class="satirbilgi"><span>Maksimum kazanç</span><b style="color:var(--yesil)">${TL(h.maxKazanc)} ₺</b></div>
    ${hata?`<div class="hata" style="margin-top:8px">${kacir(hata)}</div>`:'<div style="height:8px"></div>'}
    <button class="oyna" id="oynaBtn" ${hata?'disabled':''}>KUPONU OYNA · ${TL(K.tutar)} ₺</button>`;
}

function ciz(){
  filtreCiz();
  const el = document.getElementById('icerik');
  if(sekme==='bulten') el.innerHTML = bultenCiz(false);
  else if(sekme==='canli') el.innerHTML = bultenCiz(true);
  else if(sekme==='kuponlar') el.innerHTML = kuponlarCiz();
  else el.innerHTML = kasaCiz();
  kuponCiz();
}

/* ---------- olaylar ---------- */
const sheet = document.getElementById('sheet'), perde = document.getElementById('perde');
function sheetAc(){ sheet.classList.add('ac'); perde.classList.add('ac'); }
function sheetKapat(){ sheet.classList.remove('ac'); perde.classList.remove('ac'); }
document.getElementById('balon').onclick = sheetAc;
document.getElementById('sheetKapat').onclick = sheetKapat;
perde.onclick = sheetKapat;

document.getElementById('nav').addEventListener('click', e=>{
  const b = e.target.closest('button[data-sek]'); if(!b) return;
  sekme = b.dataset.sek;
  document.querySelectorAll('#nav button').forEach(x=>x.classList.toggle('aktif', x===b));
  window.scrollTo(0,0);
  ciz();
});

document.getElementById('filtreBar').addEventListener('click', e=>{
  const b = e.target.closest('button'); if(!b) return;
  if(b.dataset.gun){ filtre.gun = b.dataset.gun; ciz(); }
  else if(b.dataset.market){
    const k = b.dataset.market;
    if(filtre.marketler.includes(k)) filtre.marketler = filtre.marketler.filter(x=>x!==k);
    else filtre.marketler.push(k);
    filtre.marketler.sort((a,b2)=>MARKET_SIRA.indexOf(a)-MARKET_SIRA.indexOf(b2));
    ciz();
  }
  else if(b.dataset.kfiltre){ kuponFiltre = b.dataset.kfiltre; ciz(); }
});
document.getElementById('filtreBar').addEventListener('input', e=>{
  if(e.target.id==='araKutu'){
    filtre.ara = e.target.value;
    const p = e.target.selectionStart;
    ciz();
    const y = document.getElementById('araKutu');
    if(y){ y.focus(); y.setSelectionRange(p,p); }
  }
});

document.getElementById('icerik').addEventListener('click', e=>{
  const ob = e.target.closest('.ob[data-mac]');
  if(ob){
    const m = VERI.maclar[ob.dataset.mac];
    if(!m) return;
    secimEkle(m, ob.dataset.market, ob.dataset.secim, ob.dataset.oran, m.durum==='canli');
    return;
  }
  const d = e.target.closest('[data-detay]');
  if(d){ const id=d.dataset.detay; acikDetay.has(id)?acikDetay.delete(id):acikDetay.add(id); ciz(); return; }

  const id = e.target.id;
  if(id==='paraEkle'){
    const v = +document.getElementById('ekleTutar').value||0;
    if(v>0){ S.bakiye += v; kaydet(); toast(TL(v)+' ₺ eklendi'); ciz(); }
  }
  if(id==='kuponSil'){
    if(confirm('Tüm kupon geçmişi silinsin mi? (Bakiye korunur)')){ S.kuponlar=[]; kaydet(); ciz(); }
  }
  if(id==='sifirla'){
    if(confirm('Kasa ve kuponlar sıfırlanacak. Emin misiniz?')){
      S.kuponlar=[]; S.bakiye=S.ayar.baslangic; S.sayac=1; kaydet(); toast('Sıfırlandı'); ciz();
    }
  }
  if(id==='ayarKaydet'){
    S.ayar.kullanici = document.getElementById('aKullanici').value.trim();
    S.ayar.depo = document.getElementById('aDepo').value.trim();
    S.ayar.dal = document.getElementById('aDal').value.trim()||'main';
    S.ayar.baslangic = +document.getElementById('aBaslangic').value||10000;
    S.ayar.minBahis = Math.max(1,+document.getElementById('aMin').value||50);
    S.ayar.marj = Math.min(0.3, Math.max(0, +document.getElementById('aMarj').value||0.07));
    S.ayar.canliMotor = document.getElementById('aCanli').checked;
    if(K.tutar < S.ayar.minBahis) K.tutar = S.ayar.minBahis;
    lamOnbellek.clear();
    kaydet(); toast('Ayarlar kaydedildi'); veriYenile(true);
  }
});

sheet.addEventListener('click', e=>{
  const t = e.target.closest('[data-tur]');
  if(t){ K.tur = t.dataset.tur; sistemDuzelt(); kuponCiz(); return; }
  const s = e.target.closest('[data-sistem]');
  if(s){
    const r = +s.dataset.sistem;
    K.sistem = K.sistem.includes(r) ? K.sistem.filter(x=>x!==r) : [...K.sistem, r].sort((a,b)=>a-b);
    kuponCiz(); return;
  }
  const sil = e.target.closest('[data-sil]');
  if(sil){ K.secimler.splice(+sil.dataset.sil,1); sistemDuzelt(); ciz(); return; }
  const tt = e.target.closest('[data-tutar]');
  if(tt){
    K.tutar = tt.dataset.tutar==='max' ? Math.floor(S.bakiye) : +tt.dataset.tutar;
    kuponCiz(); return;
  }
  if(e.target.id==='oynaBtn'){ kuponOyna(); return; }
});
sheet.addEventListener('input', e=>{
  if(e.target.id==='tutarKutu'){
    K.tutar = Math.max(0, +e.target.value||0);
    const h = kuponHata();
    document.getElementById('oynaBtn').disabled = !!h;
    document.getElementById('oynaBtn').textContent = 'KUPONU OYNA · ' + TL(K.tutar) + ' ₺';
  }
});
document.getElementById('yenileBtn').onclick = ()=>veriYenile(false);

/* ---------- başlat ---------- */
yukle();
K.tutar = S.ayar.minBahis;
ciz();
veriYenile(true);

/* ---------- Nesine köprüsü (Tampermonkey): gerçek canlı oranlar ---------- */
let NESINE = null;                 // {guncel, maclar:[...]}
const NESINE_ESLEME = new Map();   // macId -> nesine kaydı
let nesineSonEsleme = 0;

const nrm = s => (s||'').toLocaleLowerCase('tr')
  .replace(/İ/g,'i').replace(/ı/g,'i').replace(/ş/g,'s').replace(/ğ/g,'g')
  .replace(/ü/g,'u').replace(/ö/g,'o').replace(/ç/g,'c')
  .replace(/[^a-z0-9]/g,'');

function takimBenzer(a,b){
  a = nrm(a); b = nrm(b);
  if(!a || !b) return false;
  if(a===b) return true;
  const n = Math.min(a.length, b.length, 6);
  return n>=4 && a.slice(0,n)===b.slice(0,n);
}

function nesineEslestir(){
  NESINE_ESLEME.clear();
  if(!NESINE || !Array.isArray(NESINE.maclar)) return;
  const kodIndeks = new Map();
  for(const n of NESINE.maclar) for(const k of (n.kodlar||[])) if(!kodIndeks.has(k)) kodIndeks.set(k, n);
  for(const m of Object.values(VERI.maclar)){
    let bulunan = m.kod && kodIndeks.get(String(m.kod));
    if(bulunan && !(takimBenzer(m.ev,bulunan.ev) || takimBenzer(m.dep,bulunan.dep))) bulunan = null;
    if(!bulunan){
      bulunan = NESINE.maclar.find(n => takimBenzer(m.ev,n.ev) && takimBenzer(m.dep,n.dep));
    }
    if(bulunan) NESINE_ESLEME.set(m.id, bulunan);
  }
  nesineSonEsleme = Date.now();
}

window.addEventListener('nesine-veri', e => {
  NESINE = e.detail;
  nesineEslestir();
  durumTazele();
  ciz();
});

function nesineOrani(mac){
  if(!NESINE) return null;
  if(Date.now() - nesineSonEsleme > 20000) nesineEslestir();
  const n = NESINE_ESLEME.get(mac.id);
  if(!n || !n.oran || !Object.keys(n.oran).length) return null;
  if(Date.now() - (n.guncel||0) > 5*60000) return null;   // 5 dk'dan eskiyse kullanma
  return n;
}

/* ---------- Canlı: dakika/durum saatten, skor Mackolik'ten ---------- */
const MACKOLIK_LIVEDATA = [
  d => `https://vd.mackolik.com/livedata?date=${d}`,
  d => `https://goapi.mackolik.com/livedata?date=${d}`,
  d => `http://goapi.mackolik.com/livedata?date=${d}`
];

// Maçın başlama saatine göre dakika ve durum
function saatDurumu(m){
  const gecen = (Date.now() - m.bas)/60000;
  if(!m.bas || gecen < 0) return {durum:'bekliyor', dk:0};
  if(gecen >= 118) return {durum:'bitti', dk:90};
  let dk;
  if(gecen <= 45) dk = Math.max(1, Math.round(gecen));
  else if(gecen <= 60) dk = 45;                    // devre arası
  else dk = Math.min(90, Math.round(gecen - 15));
  return {durum:'canli', dk};
}
function durumTazele(){
  for(const m of Object.values(VERI.maclar)){
    const s = VERI.sonuclar[m.id];
    if(s && (s.durum==='bitti' || s.durum==='iptal')){
      m.durum = s.durum; m.dk = 90;
      if(s.ms) m.ms = s.ms;
      if(s.iy) m.iy = s.iy;
      continue;
    }
    const d = saatDurumu(m);
    m.durum = d.durum; m.dk = d.dk;
  }
}

// Mackolik'ten SADECE skor çek (dakika/durum saatten hesaplanıyor)
async function canliSkorlariCek(){
  const bugun = new Date(Date.now() + 3*3600e3).toISOString().slice(0,10);
  const dun   = new Date(Date.now() - 21*3600e3).toISOString().slice(0,10);
  for(const tarih of [dun, bugun]){
    for(const urlFunc of MACKOLIK_LIVEDATA){
      try{
        const txt = await fetch(urlFunc(mk(tarih)), {cache:'no-store'}).then(r=>r.text());
        const a = txt.indexOf('{'), b = txt.lastIndexOf('}');
        const json = JSON.parse(txt.slice(a, b+1));
        const rows = (Array.isArray(json.m) ? json.m : []).filter(Array.isArray);
        for(const r of rows){
          const id = String(r[0]);
          const m = VERI.maclar[id];
          if(!m || !m.bas || Date.now() < m.bas) continue;   // başlamamışın skoru yok
          const h = String(r[29]??''), d = String(r[30]??'');
          if(/^\d+$/.test(h) && /^\d+$/.test(d)) m.ms = h+'-'+d;
          if(typeof r[7]==='string' && /^\d{1,2}\s*-\s*\d{1,2}$/.test(r[7])) m.iy = r[7].replace(/\s/g,'');
        }
        break;
      }catch(e){}
    }
  }
  // Nesine köprüsü skor veriyorsa onu da uygula
  if(NESINE && Array.isArray(NESINE.maclar)){
    nesineEslestir();
    for(const [id,n] of NESINE_ESLEME){
      const m = VERI.maclar[id];
      if(m && n.skor && /^\d+-\d+$/.test(n.skor) && Date.now() >= m.bas) m.ms = n.skor;
    }
  }
  durumTazele();
  sonuclandir();
  ciz();
}

durumTazele();
canliSkorlariCek();
setInterval(canliSkorlariCek, 30*1000);                 // skor: 30 sn
setInterval(()=>{ durumTazele(); sonuclandir(); ciz(); }, 15*1000);  // dakika/oran: 15 sn
setInterval(()=>veriYenile(true), 5*60*1000);
document.addEventListener('visibilitychange', ()=>{ if(!document.hidden) veriYenile(true); });
</script>
</body>
</html>
