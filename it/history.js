const API_URL = 'https://script.google.com/macros/s/AKfycbwEuc-NHkWx78CChhKYhLSUzqTGk87ZfRdzC0m1aUjwcY8gkMh_HJGoF8c9cRv07wir/exec';

document.getElementById('fetchHistoryBtn').addEventListener('click', fetchHistory);

async function fetchHistory() {
  const userId = document.getElementById('userId').value.trim();
  
  if (!userId) {
    alert("Masukkan ID User terlebih dahulu!");
    return;
  }

  document.getElementById('loading').style.display = 'block';
  document.getElementById('historyContainer').style.display = 'none';

  try {
    const response = await fetch(`${API_URL}?userId=${userId}`);
    const data = await response.json();

    if (data.error) {
      alert(data.error);
    } else {
      displayHistory(data);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Terjadi kesalahan saat mengambil data.");
  } finally {
    document.getElementById('loading').style.display = 'none';
  }
}

function displayHistory(data) {
    document.getElementById('investasi').innerText = `Rp${new Intl.NumberFormat('id-ID').format(data.investasi)}`;
    // document.getElementById('nav').innerText = `${data.nav}`;
    document.getElementById('unit').innerText = data.unit;
  
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = "";
  
    const transactions = [
      { status: "Transaksi Sedang Diverifikasi", date: data.pembayaranSedangDiverifikasi },
      { status: "Verifikasi Berhasil", date: data.pembayaranBerhasil },
      { status: "Memproses Transaksi", date: data.verifikasiManajerInvestasi },
    //   { status: "Verifikasi Broker", date: data.verifikasiBroker || 'Tidak ada data' }, // Menambahkan fallback jika undefined
    //   { status: "Dana Diteruskan ke Bank Penampung", date: data.danaDiteruskan || 'Tidak ada data' }, // Menambahkan fallback jika undefined
      { status: "Transaksi Berhasil", date: data.pembelianBerhasil }
    ];
  
    transactions.forEach(transaction => {
      const item = document.createElement('li');
      item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
      item.innerHTML = `
        <span>${transaction.status}</span>
        <span class="badge bg-success">${transaction.date}</span>
      `;
      historyList.appendChild(item);
    });
  
    document.getElementById('historyContainer').style.display = 'block';
  }
  
