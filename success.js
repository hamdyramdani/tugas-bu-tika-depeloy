'use strict';

const rupiah = (amount) => new Intl.NumberFormat('id-ID', {
  style: 'currency', currency: 'IDR', maximumFractionDigits: 0
}).format(amount);

let order = null;
try {
  order = JSON.parse(localStorage.getItem('pesananDuniaKopi') || 'null');
} catch (error) {
  order = null;
}

if (order && typeof order === 'object') {
  document.getElementById('nomorPesanan').textContent = order.nomor || '-';
  document.getElementById('barang').textContent = order.produk || '-';
  document.getElementById('total').textContent = Number.isFinite(Number(order.harga)) ? rupiah(Number(order.harga)) : '-';
  document.getElementById('penerima').textContent = order.nama || '-';
  document.getElementById('alamat').textContent = [order.alamat, order.kota].filter(Boolean).join(', ') || '-';
  document.getElementById('hp').textContent = order.hp || '-';
  document.getElementById('pembayaran').textContent = order.pembayaran || 'COD';
} else {
  document.querySelector('.sub').textContent = 'Belum ada data pesanan pada browser ini. Silakan pilih produk dan lakukan checkout terlebih dahulu.';
  document.getElementById('lacak').disabled = true;
}

document.getElementById('lacak').addEventListener('click', () => {
  const info = document.getElementById('infoPesanan');
  info.textContent = order
    ? 'Ini adalah ringkasan pesanan yang tersimpan di browser. Website demo ini belum terhubung ke sistem pengiriman atau database.'
    : 'Data pesanan belum ditemukan.';
});
