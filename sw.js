const CACHE='memory-pwa-v5';
const CORE=[
  "./",
  "./1000256580.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-180.png",
  "./icon-maskable-512.png",

  "./index.html",
  "./manifest.webmanifest",
  "./bad-badezimmer.png",
  "./bad-schwimmbad.png",
  "./birne-gluehbirne.png",
  "./birne-obst.png",
  "./blatt-baum.png",
  "./blatt-papier.png",
  "./decke-kuscheldecke.png",
  "./decke-zimmerdecke.png",
  "./hahn-bauernhof.png",
  "./hahn-wasserhahn.png",
  "./icon.svg",
  "./kartenrueckseite.png",
  "./nagel-finger.png",
  "./nagel-metall.png",
  "./note-musik.png",
  "./note-schule.png",
  "./paar-menschen.png",
  "./paar-schuhe.png",
  "./schale-frucht.png",
  "./schale-gefaess.png",
  "./schirm-lampe.png",
  "./schirm-regen.png",
  "./schlange-menschen.png",
  "./schlange-tier.png",
  "./schloss-gebaeude.png",
  "./schloss-tuerschloss.png",
  "./strauss-blumen.png",
  "./strauss-vogel.png",
  "./strom-energie.png",
  "./strom-fluss.png",
  "./tor-fussball.png",
  "./tor-garten.png"
];
const BASE=new URL('./',self.location.href);
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('memory-pwa-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(event.request.method!=='GET'||url.origin!==BASE.origin||!url.pathname.startsWith(BASE.pathname)) return;
  if(event.request.mode==='navigate') {
    event.respondWith(fetch(event.request).then(response=>{
      if(!response.ok) throw new Error('Navigation unavailable');
      return response;
    }).catch(()=>caches.match(new URL('index.html',BASE).href)));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
