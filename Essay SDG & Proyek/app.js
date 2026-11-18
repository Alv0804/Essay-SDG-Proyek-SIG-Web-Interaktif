const map = L.map('map', {center:[3.5952,98.6722], zoom:12});
const base = {
  'OpenStreetMap': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}),
  'CARTO Terang': L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',{maxZoom:20,attribution:'&copy; OpenStreetMap, &copy; CARTO'}),
  'Esri Satelit': L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:'&copy; Esri'})
};
base['OpenStreetMap'].addTo(map);

const icon = c => L.divIcon({className:'',iconSize:[18,18],iconAnchor:[9,9],popupAnchor:[0,-10],
  html:`<div style="width:18px;height:18px;border-radius:50%;background:${c};border:3px solid #fff;box-shadow:0 0 0 1.5px #1c2b2a,0 2px 6px #0006"></div>`});

// Satu layer group per kategori -> layer control tematik
const layers = {}, overlays = {}, legend = document.getElementById('legend');
for (const k in KATEGORI){
  layers[k] = L.layerGroup().addTo(map);
  overlays[`<span style="color:${KATEGORI[k].warna}">●</span> ${KATEGORI[k].label}`] = layers[k];
  legend.insertAdjacentHTML('beforeend', `<li><span class="dot" style="background:${KATEGORI[k].warna}"></span>${KATEGORI[k].label}</li>`);
}
const feats = FASILITAS.features.map(f => {
  const [lng,lat] = f.geometry.coordinates, p = f.properties, k = KATEGORI[p.kategori];
  const m = L.marker([lat,lng],{icon:icon(k.warna),title:p.nama,alt:p.nama})
    .bindPopup(`<span class="cat">${k.label}</span><h3>${p.nama}</h3><p>${p.deskripsi}</p><small>${lat.toFixed(4)}, ${lng.toFixed(4)}</small>`)
    .bindTooltip(p.nama,{direction:'top',offset:[0,-10]});
  m.addTo(layers[p.kategori]);
  return {p, ll:L.latLng(lat,lng)};
});
L.control.layers(base, overlays, {collapsed:false}).addTo(map);
L.control.scale({imperial:false}).addTo(map);
map.fitBounds(L.latLngBounds(feats.map(f=>f.ll)).pad(.1));

const info = document.getElementById('info'), user = L.layerGroup().addTo(map);
const fmt = m => m >= 1000 ? (m/1000).toFixed(2)+' km' : Math.round(m)+' m';
let measuring = false, pts = [], line = null;

function showNearest(ll){
  const list = feats.map(f=>({n:f.p.nama,c:f.p.kategori,d:ll.distanceTo(f.ll),ll:f.ll}));
  const box = document.getElementById('nearestList'); box.innerHTML = '';
  Object.keys(KATEGORI).forEach(k=>{
    const t = list.filter(x=>x.c===k).sort((a,b)=>a.d-b.d)[0];
    if(t) box.insertAdjacentHTML('beforeend',`<li><span><span class="dot" style="background:${KATEGORI[k].warna};display:inline-block;vertical-align:middle"></span> ${t.n}</span><b>${fmt(t.d)}</b></li>`);
  });
  document.getElementById('nearest').hidden = false;
}
function setPoint(ll, label){
  user.clearLayers();
  L.circleMarker(ll,{radius:8,color:'#e0a100',fillColor:'#e0a100',fillOpacity:1}).addTo(user).bindPopup(label).openPopup();
  showNearest(ll);
}

map.on('click', e=>{
  const ll = e.latlng;
  if(measuring){
    pts.push(ll);
    line = line || L.polyline([], {color:'#e0a100',weight:4,dashArray:'8 6'}).addTo(user);
    line.setLatLngs(pts);
    let d = 0; for(let i=1;i<pts.length;i++) d += pts[i-1].distanceTo(pts[i]);
    L.circleMarker(ll,{radius:4,color:'#e0a100',fillOpacity:1}).addTo(user);
    info.textContent = `Jarak total: ${fmt(d)} (${pts.length} titik)`;
  } else {
    info.textContent = `Titik: ${ll.lat.toFixed(5)}, ${ll.lng.toFixed(5)} — fasilitas terdekat ditampilkan di panel.`;
    setPoint(ll, 'Titik pilihan Anda');
  }
});

const btnM = document.getElementById('btnMeasure');
btnM.onclick = () => {
  measuring = !measuring; btnM.setAttribute('aria-pressed', measuring);
  pts = []; line = null; user.clearLayers();
  info.textContent = measuring ? 'Mode ukur: klik berurutan pada peta.' : 'Klik peta untuk melihat koordinat.';
};
document.getElementById('btnClear').onclick = () => {
  user.clearLayers(); pts = []; line = null;
  document.getElementById('nearest').hidden = true;
  info.textContent = 'Peta dibersihkan.';
};
document.getElementById('btnLocate').onclick = () => {
  info.textContent = 'Mencari lokasi Anda…';
  map.locate({setView:true, maxZoom:15, timeout:8000});
};
map.on('locationfound', e => {
  setPoint(e.latlng, `Lokasi Anda (±${Math.round(e.accuracy)} m)`);
  info.textContent = 'Lokasi ditemukan. Lihat fasilitas terdekat di panel.';
});
map.on('locationerror', () => info.textContent = 'Lokasi tidak dapat diakses. Izinkan akses lokasi di browser, atau klik peta.');
