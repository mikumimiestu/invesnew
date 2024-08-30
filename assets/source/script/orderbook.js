// Data harga bid dan ask yang diinput secara manual
const bids = [
    { price: '6930.00', quantity: 0 },
    { price: '6940.00', quantity: 0 },
    { price: '6950.00', quantity: 0 },
    { price: '6960.00', quantity: 0 },
    { price: '6970.00', quantity: 0 },
    { price: '6980.00', quantity: 0 },
    { price: '6990.00', quantity: 0 },
  ];
  
  const asks = [
    { price: '6100.00', quantity: 0 },
    { price: '6110.00', quantity: 0 },
    { price: '6120.00', quantity: 0 },
    { price: '6130.00', quantity: 0 },
    { price: '6140.00', quantity: 0 },
    { price: '6150.00', quantity: 0 },
    { price: '6160.00', quantity: 0 },
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
