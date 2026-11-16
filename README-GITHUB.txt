PANDUAN UPLOAD WEBSITE DUNIA KOPI KE GITHUB PAGES

1. Ekstrak file ZIP ini.
2. Buka repository GitHub tempat website akan dipasang.
3. Upload SEMUA file di dalam folder ini langsung ke bagian utama (root) repository:
   index.html, checkout.html, success.html, style.css, checkout.css,
   success.css, script.js, checkout.js, success.js.
   Jangan hanya meng-upload file ZIP.
4. Pastikan nama halaman utama tepat: index.html (huruf kecil).
5. Buka Settings > Pages.
6. Pada Build and deployment, pilih Deploy from a branch.
7. Pilih branch main dan folder /(root), lalu Save.
8. Tunggu proses selesai, lalu buka alamat Pages yang ditampilkan GitHub.

PENTING:
- Jangan menaruh index.html di dalam folder tambahan jika Pages diatur ke /(root).
- Nama file harus sama persis, termasuk huruf kecil/besar.
- Jika memakai repository project, alamat biasanya berbentuk:
  https://USERNAME.github.io/NAMA-REPOSITORY/
- Jika mengubah file, commit perubahan dan tunggu Pages selesai deploy.

CATATAN FITUR:
Website ini adalah demo front-end. Data checkout disimpan memakai localStorage
di browser/perangkat yang digunakan. Data tidak otomatis tersinkron antara HP
dan laptop, dan pesanan belum dikirim ke server/database atau jasa pengiriman.
