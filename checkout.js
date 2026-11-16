'use strict';

const rupiah = (amount) => new Intl.NumberFormat('id-ID', {
  style: 'currency', currency: 'IDR', maximumFractionDigits: 0
}).format(amount);

const selectedName = localStorage.getItem('namaKopi') || '';
const selectedPrice = Number(localStorage.getItem('hargaKopi') || 0);
const validProduct = selectedName && Number.isFinite(selectedPrice) && selectedPrice > 0;

document.getElementById('namaProduk').textContent = validProduct ? `1x ${selectedName}` : 'Belum ada produk dipilih';
document.getElementById('hargaProduk').textContent = validProduct ? rupiah(selectedPrice) : '-';
document.getElementById('totalProduk').textContent = validProduct ? rupiah(selectedPrice) : '-';

const form = document.getElementById('formCheckout');
const error = document.getElementById('formError');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  error.textContent = '';

  if (!validProduct) {
    error.textContent = 'Silakan kembali ke halaman produk dan pilih kopi terlebih dahulu.';
    return;
  }
  if (!form.reportValidity()) return;

  const order = {
    nomor: `DK-${Date.now().toString().slice(-8)}`,
    produk: selectedName,
    harga: selectedPrice,
    nama: document.getElementById('nama').value.trim(),
    alamat: document.getElementById('alamat').value.trim(),
    kota: document.getElementById('kota').value.trim(),
    hp: document.getElementById('hp').value.trim(),
    pembayaran: 'COD'
  };

  if (!order.nama || !order.alamat || !order.kota || !order.hp) {
    error.textContent = 'Semua data pengiriman wajib diisi.';
    return;
  }

  try {
    localStorage.setItem('pesananDuniaKopi', JSON.stringify(order));
    window.location.href = 'success.html';
  } catch (storageError) {
    error.textContent = 'Pesanan tidak dapat disimpan di browser ini. Periksa pengaturan penyimpanan situs.';
  }
});
