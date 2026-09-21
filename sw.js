// The Blueprint / El Plano · offline support. Pages, games, songs and grooves work offline after the first visit.
const CACHE='blueprint-1789967903';
const PAGES=["3-5.html", "6-8.html", "9-12.html", "beats.html", "builder.html", "grade1-beats.html", "grade10-album.html", "grade10-beats.html", "grade11-beats.html", "grade12-beats.html", "grade2-beats.html", "grade3-album.html", "grade3-beats.html", "grade4-album.html", "grade4-beats.html", "grade5-album.html", "grade5-beats.html", "grade6-album.html", "grade6-beats.html", "grade7-album.html", "grade7-beats.html", "grade8-album.html", "grade8-beats.html", "grade9-beats.html", "gradeK-beats.html", "index.html", "k-2.html", "monday-moves.html", "progress.html", "search.html", "teachers.html", "today.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(PAGES.map(u=>c.add(u).catch(()=>null)))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE&&x.indexOf('blueprint-')===0).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const r=e.request; if(r.method!=='GET')return; const u=new URL(r.url); if(u.origin!==location.origin)return;
  if(r.headers.has('range'))return;                                  // let the browser stream audio itself
  const isPage=r.mode==='navigate'||u.pathname.endsWith('.html')||u.pathname.endsWith('/');
  if(isPage){ e.respondWith(fetch(r).then(res=>{const copy=res.clone(); caches.open(CACHE).then(c=>c.put(u.pathname.endsWith('/')?'index.html':r,copy)); return res;}).catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||caches.match('index.html')))); return; }
  e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{ if(res.ok&&!u.pathname.endsWith('.mp3')){const copy=res.clone(); caches.open(CACHE).then(c=>c.put(r,copy));} return res; })));
});
