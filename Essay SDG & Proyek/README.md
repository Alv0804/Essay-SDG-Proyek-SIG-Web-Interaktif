# Peta Akses Layanan Publik Kota Medan

WebGIS berbasis **Leaflet 1.9.4** untuk Proyek Tahap 1 mata kuliah Pengembangan SIG Web (Sub-CPMK 7).
Tema: **SDG 11** (kota & permukiman berkelanjutan — akses layanan dasar) dan **SDG 9** (infrastruktur & inovasi).

**Live demo:** `https://USERNAME.github.io/NAMA-REPO/` *(ganti setelah publikasi)*

## Fitur
- 3 basemap (OSM, CARTO Terang, Esri Satelit) + 4 layer tematik lewat *layer control*
- 11 titik fasilitas (kesehatan, pendidikan, transportasi, ruang publik) dengan popup informatif
- Klik peta / **Lokasi saya** → daftar fasilitas terdekat per kategori (`distanceTo`)
- **Ukur jarak** multi-titik, skala peta, legenda, atribusi
- Responsif (diuji 375 px), fokus keyboard terlihat, kontras teks tinggi

## Struktur
```
index.html   # halaman
style.css    # tampilan
app.js       # logika peta
data/fasilitas.js        # data dipakai aplikasi (GeoJSON dalam variabel JS)
data/fasilitas.geojson   # salinan GeoJSON murni (bisa dibuka di QGIS)
```

## Menjalankan
Buka `index.html` di browser (butuh internet untuk tile & Leaflet CDN).

## Publikasi GitHub Pages
1. Buat repo baru, unggah semua file.
2. *Settings → Pages → Deploy from a branch → main / (root)*.
3. Salin URL ke bagian Live demo di atas.

## Catatan data
Koordinat adalah **perkiraan** dan perlu diverifikasi (mis. lewat QGIS atau OpenStreetMap) sebelum dikumpulkan.
Sumber: pengetahuan umum + materi kuliah; basemap © OpenStreetMap contributors, © CARTO, © Esri.
