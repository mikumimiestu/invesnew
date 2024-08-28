function updateMarketStatus() {
  const marketStatusElement = document.getElementById('marketStatus');
  const currentDateElement = document.getElementById('currentDate');
  const marketCountdownElement = document.getElementById('marketCountdown');

  const today = new Date();
  const dayOfWeek = today.getDay();
  const currentHour = today.getHours();

  // Check if it's a weekday (Monday to Friday)
  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      const marketOpenTime = new Date(today);
      marketOpenTime.setHours(9, 0, 0); // Market opens at 9:00 AM

      const marketCloseTime = new Date(today);
      marketCloseTime.setHours(16, 0, 0); // Market closes at 4:00 PM

      // Check if the current time is before market close
      if (today >= marketOpenTime && today < marketCloseTime) {
          marketStatusElement.textContent = 'Market Open';
          marketStatus.innerHTML = 'Market Open <span class="silver-text bold-text">[Normal]</span>';
          marketStatusElement.classList.add('open');
          marketStatusElement.classList.remove('closed');
          marketCountdownElement.textContent = ''; // Clear countdown

          currentDateElement.textContent = `Tanggal: ${today.toLocaleDateString()}`;
      } else {
          // Market is closed, calculate time until next open
          const nextOpenTime = new Date(today);

          // If current time is after market close, calculate next open time
          if (today >= marketCloseTime) {
              nextOpenTime.setDate(today.getDate() + 1); // Move to next day
          }

          nextOpenTime.setHours(9, 0, 0); // Next open at 9:00 AM

          const timeDifference = nextOpenTime.getTime() - today.getTime();
          const secondsUntilOpen = Math.floor(timeDifference / 1000);

          const hours = Math.floor(secondsUntilOpen / 3600);
          const minutes = Math.floor((secondsUntilOpen % 3600) / 60);
          const seconds = secondsUntilOpen % 60;

          marketStatusElement.textContent = 'Market Closed';
          marketStatusElement.classList.add('closed');
          marketStatusElement.classList.remove('open');

          marketCountdownElement.textContent = `Market akan buka dalam ${hours}h ${minutes}m ${seconds}s`;

          currentDateElement.textContent = `Tanggal: ${today.toLocaleDateString()}`;
      }
  } else {
      // Weekend (Saturday or Sunday)
      marketStatusElement.textContent = 'Market Closed';
      marketStatusElement.classList.add('closed');
      marketStatusElement.classList.remove('open');

      // Find the next Monday at 9:00 AM
      let nextMonday = new Date(today);
      nextMonday.setDate(today.getDate() + ((1 + 7 - dayOfWeek) % 7));
      nextMonday.setHours(9, 0, 0);

      const timeDifference = nextMonday.getTime() - today.getTime();
      const secondsUntilOpen = Math.floor(timeDifference / 1000);

      const hours = Math.floor(secondsUntilOpen / 3600);
      const minutes = Math.floor((secondsUntilOpen % 3600) / 60);
      const seconds = secondsUntilOpen % 60;

      marketCountdownElement.textContent = `Market will open on Monday at 9:00 AM`;
      currentDateElement.textContent = `Tanggal: ${today.toLocaleDateString()}`;
  }
}

// Initial update
updateMarketStatus();

// Update every second
setInterval(updateMarketStatus, 1000);

document.querySelectorAll('#time-range-buttons button').forEach(button => {
    button.addEventListener('click', function() {
      // Hapus kelas 'active' dari semua tombol
      document.querySelectorAll('#time-range-buttons button').forEach(btn => btn.classList.remove('active'));
      
      // Tambahkan kelas 'active' ke tombol yang ditekan
      this.classList.add('active');
    });
  });

