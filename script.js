'use strict';

document.querySelectorAll('.buy').forEach((button) => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);

    if (!name || !Number.isFinite(price) || price <= 0) {
      const status = document.getElementById('statusProduk');
      if (status) status.textContent = 'Produk belum dapat diproses. Silakan muat ulang halaman.';
      return;
    }

    try {
      localStorage.setItem('namaKopi', name);
      localStorage.setItem('hargaKopi', String(price));
      window.location.href = 'checkout.html';
    } catch (error) {
      const status = document.getElementById('statusProduk');
      if (status) status.textContent = 'Penyimpanan browser tidak tersedia. Coba aktifkan penyimpanan situs.';
    }
  });
});
