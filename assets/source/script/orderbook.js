// Data harga bid dan ask yang diinput secara manual
const bids = [
    { price: '5890.00', quantity: 0 },
    { price: '5900.00', quantity: 0 },
    { price: '5910.00', quantity: 0 },
    { price: '5920.00', quantity: 0 },
    { price: '5930.00', quantity: 0 },
    { price: '5940.00', quantity: 0 },
    { price: '5950.00', quantity: 0 },
  ];
  
  const asks = [
    { price: '5960.00', quantity: 0 },
    { price: '5970.00', quantity: 0 },
    { price: '5980.00', quantity: 0 },
    { price: '5990.00', quantity: 0 },
    { price: '6000.00', quantity: 0 },
    { price: '6010.00', quantity: 0 },
    { price: '6020.00', quantity: 0 },
  ];
  
  function updateOrderBookTable() {
    const today = new Date();
    const day = today.getDay();
    const hour = today.getHours();
  
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 16) { // Market is open from Monday to Friday, 9:00-16:00
        const tableBody = document.querySelector('#orderBook tbody');
        tableBody.innerHTML = '';
  
        // Update bids
        for (let i = 0; i < bids.length; i++) {
            const newRow = tableBody.insertRow();
  
            const bidPriceCell = newRow.insertCell();
            bidPriceCell.textContent = bids[i].price;
  
            const bidQuantityCell = newRow.insertCell();
            bids[i].quantity = Math.floor(Math.random() * 1000) + 1; // Randomize quantity
            bidQuantityCell.textContent = bids[i].quantity;
  
            const askPriceCell = newRow.insertCell();
            askPriceCell.textContent = asks[i].price;
  
            const askQuantityCell = newRow.insertCell();
            asks[i].quantity = Math.floor(Math.random() * 1000) + 1; // Randomize quantity
            askQuantityCell.textContent = asks[i].quantity;
        }
    }
  }
  
  // Initial order book update
  updateOrderBookTable();
  
  // Update order book every 5 seconds during market hours (Monday to Friday, 9:00-21:00)
  setInterval(updateOrderBookTable, 5000);
