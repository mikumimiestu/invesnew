// Fungsi Navigasi
// Fungsi untuk menampilkan bagian yang dipilih dan menyembunyikan yang lainnya
function showSection(sectionId) {
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
      section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
  }

  // Event listeners untuk tombol navigasi
  document.getElementById('news-btn').addEventListener('click', function() {
    showSection('news-section');
  });

  document.getElementById('orderbook-btn').addEventListener('click', function() {
    showSection('orderbook-section');
  });

  document.getElementById('financial-btn').addEventListener('click', function() {
    showSection('financial-section');
  });

  document.getElementById('corpaction-btn').addEventListener('click', function() {
    showSection('corpaction-section');
  });

  document.getElementById('keuntungan-btn').addEventListener('click', function() {
    showSection('keuntungan-section');
  });

  document.getElementById('holding-btn').addEventListener('click', function() {
    showSection('holding-section');
  });

  // Tampilkan default section (News)
  showSection('news-section');

  document.addEventListener("DOMContentLoaded", function() {
    // Set default active tab (News)
    const defaultActiveTab = document.getElementById("news-btn");
    defaultActiveTab.classList.add("active");
  
    // Handle click events on navigation buttons
    const navButtons = document.querySelectorAll('.nav-container > a');
    navButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        navButtons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        this.classList.add('active');
      });
    });
  });

// Script khusus download
document.getElementById('share-button').addEventListener('click', function() {
  // Ambil elemen canvas
  var canvas = document.getElementById('myChart');
  
  // Konversi canvas ke Data URL (base64)
  var image = canvas.toDataURL('image/png');
  
  // Buat elemen link untuk mengunduh gambar
  var downloadLink = document.createElement('a');
  downloadLink.href = image;
  downloadLink.download = 'grafik.png'; // Nama file gambar yang akan diunduh
  
  // Trigger klik untuk mengunduh gambar
  downloadLink.click();
});
