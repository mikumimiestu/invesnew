function updateChart(timeRange, button) {
    // Panggil fungsi untuk memperbarui grafik
    // Implementasikan logika updateChart di sini

    // Hapus kelas "active" dari semua tombol
    var buttons = document.querySelectorAll('#time-range-buttons button');
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });

    // Tambahkan kelas "active" ke tombol yang ditekan
    button.classList.add('active');
}
// Data di ambil otomatis dari API KEY transaksi pada Database yang terhubung
// Berikan delay selama 1d dan reset pada server setiap jam 21.00 agar websit berjalan dengan lancar 
// Jangan edit data secara manual, akan terjadi error jika di lakukan
// Lakukan pengecekan secara berkala pada output git untuk melihat apakah API KEY berjalan dengan lancar
const data = {
    '1d': [ 6110, 6080, 6090, 6080, 6090, 6080, 6090, 6080, 6080, 6080,
            6090, 6080, 6080, 6060, 6070, 6060, 6070, 6070, 6070, 6070,
            6070, 6080, 6070, 6080, 6070, 6080, 6080, 6080, 6080, 6070,
            6070, 6060, 6080, 6070, 6080, 6080, 6080, 6080, 6070, 6080,
            6070, 6070, 6060, 6060, 6060, 6060, 6060, 6060, 6060, 6060],

    '1w': [ 6110, 6080, 6090, 6060, 6070, 6070, 6080, 6080, 6060, 6060],
  
    '1m': [ 6110, 6080, 6090, 6060, 6070, 6070, 6080, 6080, 6060, 6060],
    
    'ytd':[ 4260, 4280, 4290, 4380, 4380, 4410, 4480, 4420, 4410, 4440,
            4440, 4480, 4580, 4520, 4530, 4580, 4460, 4470, 4500, 4480,
            4530, 4590, 4630, 4630, 4600, 4640, 4680, 4660, 4640, 4630,
            4610, 4610, 4550, 4610, 4630, 4690, 4710, 4780, 4780, 4710,
            4760, 4780, 4850, 4820, 4890, 4950, 4980, 5000, 5000, 5050,
            5090, 5020, 4950, 4920, 4950, 5000, 5020, 5050, 5080, 5090,
            5100, 5120, 5160, 5130, 5170, 5160, 5180, 5210, 5200, 5230,
            5240, 5250, 5160, 5140, 5170, 5120, 5140, 5130, 5160, 5030,
            5180, 5160, 5230, 5320, 5520, 5510, 5570, 5650, 5850, 5840,
            5910, 5890, 5860, 5800, 5860, 6010, 6100, 6060, 5950, 5890,
            5960, 5840, 5730, 5640, 5690, 5770, 5960, 5850, 5740, 5500,
            5530, 5610, 5750, 5790, 5840, 5860, 5900, 6000, 5980, 6090,
            5970, 5910, 5920, 6070, 6010, 5900, 5780, 5700, 5660, 5620,
            5670, 5790, 5800, 5890, 5910, 5950, 6180, 6140, 6100, 6040,
            6060, 6070, 6150, 6180, 5950, 5930, 5870, 6470, 6320, 6110,
            6060],
            
    '1y': [ 4710, 4820, 4900, 4710, 4610, 4610, 4510, 4310, 4240, 4120,
            4150, 4230, 4180, 4410, 4180, 4010, 4080, 4150, 4020, 3990,
            4260, 4280, 4290, 4380, 4380, 4410, 4480, 4420, 4410, 4440,
            4440, 4480, 4580, 4520, 4530, 4580, 4460, 4470, 4500, 4480,
            4530, 4590, 4630, 4630, 4600, 4640, 4680, 4660, 4640, 4630,
            4610, 4610, 4550, 4610, 4630, 4690, 4710, 4780, 4780, 4710,
            4760, 4780, 4850, 4820, 4890, 4950, 4980, 5000, 5000, 5050,
            5090, 5020, 4950, 4920, 4950, 5000, 5020, 5050, 5080, 5090,
            5100, 5120, 5160, 5130, 5170, 5160, 5180, 5210, 5200, 5230, 
            5240, 5250, 5160, 5140, 5170, 5120, 5140, 5130, 5160, 5030,
            5180, 5160, 5230, 5320, 5520, 5510, 5570, 5650, 5850, 5840,
            5910, 5890, 5860, 5800, 5860, 6010, 6100, 6060, 5950, 5890,
            5960, 5840, 5730, 5640, 5690, 5770, 5960, 5850, 5740, 5500,
            5530, 5610, 5750, 5790, 5840, 5860, 5900, 6000, 5980, 6090,
            5970, 5910, 5920, 6070, 6010, 5900, 5780, 5700, 5660, 5620,
            5670, 5790, 5800, 5890, 5910, 5950, 6180, 6140, 6100, 6040,
            6060, 6070, 6150, 6180, 5950, 5930, 5910, 5870, 6470, 6110,
            6060],
  
    '3y': [ 3420, 3480, 3580, 3800, 3710, 3650, 3710, 3780, 3790, 3870,
            3890, 3980, 4100, 4120, 4120, 4050, 4100, 4200, 4500, 4310,
            4100, 4150, 4170, 4010, 3800, 3750, 3810, 3640, 3510, 3400,
            3320, 3310, 3340, 3310, 3250, 3310, 3210, 3350, 3150, 3050,
            3400, 3240, 3240, 2800, 2530, 2540, 2580, 2410, 2350, 2100,
            2050, 2090, 2150, 2040, 1950, 1980, 1850, 1740, 1610, 1690,
            1680, 1680, 1680, 1980, 1780, 1710, 1710, 1620, 1530, 1580,
            1680, 1420, 1250, 1420, 1480, 1480, 1580, 1680, 1800, 1700,
            1850, 2000, 2100, 2050, 2080, 2150, 2250, 2450, 2580, 2680,
            2620, 2610, 2800, 2900, 3000, 2500, 2590, 2700, 2700, 2850,
            2810, 2900, 3000, 3200, 3180, 3300, 3100, 3400, 3500, 3600,
            3800, 3600, 3750, 3800, 3950, 3410, 3500, 3750, 3860, 3910,
            4000, 4100, 4200, 4120, 4280, 4100, 4210, 4300, 4350, 4380,
            4250, 4210, 4100, 4180, 4200, 4350, 4450, 4310, 4380, 4450,
            4410, 4300, 4410, 4410, 4410, 4410, 4700, 4800, 4680, 4410,
            4100, 4130, 4150, 4110, 4300, 4380, 4800, 4810, 4810, 4950,
            5010, 5020, 5010, 5080, 5010, 5090, 5180, 5130, 5050, 5010,
            5230, 5180, 5250, 5310, 5110, 5210, 5240, 5400, 5320, 5390,
            5450, 5500, 5410, 5120, 5210, 5120, 5050, 4780, 4510, 4780,
            4710, 4820, 4820, 4710, 4610, 4610, 4510, 4310, 4240, 4120,
            4150, 4230, 4180, 4410, 4180, 4010, 4080, 4150, 4020, 3990,
            4260, 4280, 4290, 4380, 4380, 4410, 4480, 4420, 4410, 4440,
            4440, 4480, 4580, 4520, 4530, 4580, 4460, 4470, 4500, 4480,
            4530, 4590, 4630, 4630, 4600, 4640, 4680, 4660, 4640, 4630,
            4610, 4610, 4550, 4610, 4630, 4690, 4710, 4780, 4780, 4710,
            4760, 4780, 4850, 4820, 4890, 4950, 4980, 5000, 5000, 5050,
            5090, 5020, 4950, 4920, 4950, 5000, 5020, 5050, 5080, 5090,
            5100, 5120, 5160, 5130, 5170, 5160, 5180, 5210, 5200, 5230, 
            5240, 5250, 5160, 5140, 5170, 5120, 5140, 5130, 5160, 5030,
            5180, 5160, 5230, 5320, 5520, 5510, 5570, 5650, 5850, 5840,
            5910, 5890, 5860, 5800, 5860, 6010, 6100, 6060, 5950, 5890,
            5960, 5840, 5730, 5640, 5690, 5770, 5960, 5850, 5740, 5500,
            5530, 5610, 5750, 5790, 5840, 5860, 5900, 6000, 5980, 6090,
            5970, 5910, 5920, 6070, 6010, 5900, 5780, 5700, 5660, 5620,
            5670, 5790, 5800, 5890, 5910, 5950, 6180, 6140, 6100, 6040,
            6060, 6070, 6150, 6180, 5950, 5930, 5910, 5870, 6470, 6110,
            6060]
  };
  
// Initial data for the chart
const initialData = data['1d'];


// Function to update the chart based on the selected time range
function updateChart(timeRange) {
    const chartData = data[timeRange];
  
    // Limit the chart data to show only the latest 200 data points
    const latestData = chartData.slice(-100000);
  
    // Kondisi untuk mengubah warna berdasarkan timeRange
    let borderColor;
    let shadowColor;
    
    if (timeRange === '1d' || timeRange === '1w' || timeRange === '1m') {
      borderColor = 'rgb(255, 0, 0)'; // Warna merah 
      shadowColor = 'rgba(255, 0, 0, 0.8)'; // Bayangan merah
    } else {
      borderColor = 'rgb(0, 211, 0)'; // Warna hijau untuk rentang waktu lainnya
      shadowColor = 'rgba(0, 128, 0, 0.8)'; // Bayangan hijau
    }
  
    // Update dataset dengan warna yang baru
    myChart.data.datasets[0].data = latestData;
    myChart.data.datasets[0].borderColor = borderColor;
    myChart.data.datasets[0].shadowColor = shadowColor;
  
    myChart.data.datasets[1].data = Array(latestData.length).fill(latestData[0]); // Use the first value as the reference line
    myChart.data.labels = Array.from({ length: latestData.length }).fill('.');
  
    // Update x-axis scale to match the number of data points
    myChart.options.scales.x.ticks.min = 0;
    myChart.options.scales.x.ticks.max = latestData.length - 1;
  
    myChart.update();
  }
  

// Chart.js configuration
const ctx = document.getElementById('myChart').getContext('2d');
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
gradient.addColorStop(1, 'rgba(0, 255, 0, 0)');

const initialDataKey = '1d'; // Memilih data awal (1d, 1w, 1m, 1y, 3y)

let myChart;

document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi grafik
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: initialData.length }).fill('.'),
            datasets: [
                {
                    label: 'Market Gabungan Saham XDID & XTWR',
                    data: initialData,
                    borderColor: 'rgb(0, 211, 0)',
                    backgroundColor: gradient,
                    borderWidth: 2,
                    tension: 0.2,
                    fill: true,
                    pointRadius: 0, // Menghilangkan titik pada garis
                    borderSkipped: 'round',
                    shadowOffsetX: 0,
                    shadowOffsetY: 10,
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 128, 0, 0.8)',
                },
                {
                    label: 'Nilai Awal',
                    data: Array(initialData.length).fill(initialData[0]),
                    borderColor: 'silver',
                    borderWidth: 2,
                    fill: false,
                    pointRadius: 0, // Menghilangkan titik pada garis nilai awal
                    tooltip: {
                        enabled: false,
                    },
                },
            ],
        },
        options: {
            scales: {
                x: {
                    display: false,
                },
                y: {
                    display: true, // Tampilkan nilai pada sumbu y
                    beginAtZero: false,
                    position: 'right', // Pindahkan label sumbu y ke sebelah kanan
                    grid: {
                        display: false, // Sembunyikan garis pada sumbu y
                    },
                },
            },
            plugins: {
                legend: {
                    display: false, // Sembunyikan legenda
                },
                tooltip: {
                    enabled: false,
                },
            },
        },
    });
  
    // Aktifkan tombol 1d dan perbarui grafik saat halaman dimuat
    const button1d = document.querySelector('#time-range-buttons button[data-time-range="1d"]');
    button1d.classList.add('active');
    updateChart('1d');
  });
  

// Fungsi untuk menghitung nilai rata-rata dari sebuah array
function calculateAverage(dataArray) {
  const sum = dataArray.reduce((acc, curr) => acc + curr, 0);
  return sum / dataArray.length;
}
