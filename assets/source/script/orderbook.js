// Data harga bid dan ask yang diinput secara manual
const bids = [
    { price: '5790.00', quantity: 0 },
    { price: '5800.00', quantity: 0 },
    { price: '5810.00', quantity: 0 },
    { price: '5820.00', quantity: 0 },
    { price: '5830.00', quantity: 0 },
    { price: '5840.00', quantity: 0 },
    { price: '5850.00', quantity: 0 },
  ];
  
  const asks = [
    { price: '5860.00', quantity: 0 },
    { price: '5870.00', quantity: 0 },
    { price: '5880.00', quantity: 0 },
    { price: '5890.00', quantity: 0 },
    { price: '5900.00', quantity: 0 },
    { price: '5910.00', quantity: 0 },
    { price: '5920.00', quantity: 0 },
  ];
  
  function updateOrderBookTable() {
    const today = new Date();
    const day = today.getDay();
    const hour = today.getHours();
  
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 16) { // Market is open from Monday to Friday, 9:00-21:00
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