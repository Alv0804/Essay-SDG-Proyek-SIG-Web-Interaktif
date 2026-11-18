// Data titik fasilitas (GeoJSON). Koordinat perkiraan — verifikasi sebelum dikumpulkan.
const KATEGORI = {
 "kesehatan": {
  "label": "Kesehatan",
  "warna": "#c0392b"
 },
 "pendidikan": {
  "label": "Pendidikan",
  "warna": "#1f5fbf"
 },
 "transportasi": {
  "label": "Transportasi",
  "warna": "#7a3fb5"
 },
 "publik": {
  "label": "Ruang Publik & Wisata",
  "warna": "#2e7d32"
 }
};
const FASILITAS = {
 "type": "FeatureCollection",
 "features": [
  {
   "type": "Feature",
   "properties": {
    "nama": "RSUP H. Adam Malik",
    "kategori": "kesehatan",
    "deskripsi": "Rumah sakit rujukan nasional tipe A di Sumatera Utara."
   },
   "geometry": {
    "type": "Point",
    "coordinates": [
     98.609,
     3.5166
    ]
   }
  },
  {
   "type": "Feature",
   "properties": {
    "nama": "RSUD Dr. Pirngadi",
    "kategori": "kesehatan",
    "deskripsi": "Rumah sakit umum daerah milik Pemerintah Kota Medan."
   },
   "geometry": {
    "type": "Point",
    "coordinates": [
     98.6835,
     3.581
    ]
   }
  },
  {
   "type": "Feature",
   "properties": {
    "nama": "RS Santa Elisabeth",
    "kategori": "kesehatan",
    "deskripsi": "Rumah sakit swasta di pusat kota."
   },
   "geometry": {
    "type": "Point",
    "coordinates": [
     98.663,
     3.577
    ]
   }
  },
  {
   "type": "Feature",
   "properties": {
    "nama": "RS Columbia Asia Medan",
    "kategori": "kesehatan",
    "deskripsi": "Rumah sakit swasta dengan layanan gawat darurat 24 jam."
   },
   "geometry": {
    "type": "Point",
    "coordinates": [
     98.676,
     3.587
    ]
   }
  },
  {
   "type": "Feature",
   "properties": {
    "nama": "Universitas Sumatera Utara",
    "kategori": "pendidikan",
    "deskripsi": "Kampus negeri di Padang Bulan."
   },
   "geometry": {
    "type": "Point",
    "coordinates": [
     98.6566,
     3.5622
    ]
   }
  },
  {
   "type": "Feature",
   "properties": {
    "nama": "Universitas Negeri Medan",
    "kategori": "pendidikan",
    "deskripsi": "Kampus negeri di Medan Estate."
   },
   "geometry": {
    "type": "Point",
    "coordinates": [
     98.7126,
     3.6222
    ]
   }
  },
  {
   "type": "Feature",
   "properties": {
    "nama": "Bandara Kualanamu",
    "kategori": "transportasi",
    "deskripsi": "Bandara internasional utama Sumatera Utara."
   },
   "geometry": {
    "type": "Point",
    "coordinates": [
     98.8853,
     3.6422
    ]
   }
  },
  {
   "type": "Feature",
   "properties": {
    "nama": "Stasiun Medan",
    "kategori": "transportasi",
    "deskripsi": "Stasiun kereta api utama, terhubung ke jalur bandara."
   },
   "geometry": {
    "type": "Point",
    "coordinates": [
     98.6806,
     3.5918
    ]
   }
  },
  {
   "type": "Feature",
   "properties": {
    "nama": "Terminal Amplas",
    "kategori": "transportasi",
    "deskripsi": "Terminal bus antarkota arah selatan."
   },
   "geometry": {
    "type": "Point",
    "coordinates": [
     98.719,
     3.544
    ]
   }
  },
  {
   "type": "Feature",
   "properties": {
    "nama": "Lapangan Merdeka",
    "kategori": "publik",
    "deskripsi": "Ruang terbuka hijau di jantung kota."
   },
   "geometry": {
    "type": "Point",
    "coordinates": [
     98.6731,
     3.5914
    ]
   }
  },
  {
   "type": "Feature",
   "properties": {
    "nama": "Istana Maimun",
    "kategori": "publik",
    "deskripsi": "Istana Kesultanan Deli, ikon wisata sejarah Medan."
   },
   "geometry": {
    "type": "Point",
    "coordinates": [
     98.6839,
     3.575
    ]
   }
  }
 ]
};
