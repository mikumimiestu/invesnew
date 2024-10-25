document.addEventListener('DOMContentLoaded', () => {
    fetchMessages(); // Ambil pesan saat pertama kali dimuat
    setInterval(fetchMessages, 1000); // Polling setiap 5 detik untuk memperbarui pesan
});

document.getElementById('send-btn')?.addEventListener('click', sendMessage);

let lastTimestamp = '';

function fetchMessages() {
    fetch('https://script.google.com/macros/s/AKfycbxmPhNNFwXt-OrOAy22QqaFH5dAZOHiBRX6FQUzoqjStAyPOFAxEpRr-B0QeW-i_5h4/exec')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Sort data berdasarkan timestamp jika belum disortir
            data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

            const newMessages = data.filter(msg => msg.timestamp > lastTimestamp);

            // Update lastTimestamp jika ada pesan baru
            if (newMessages.length > 0) {
                lastTimestamp = newMessages[newMessages.length - 1].timestamp;
            }

            // Tampilkan pesan baru
            newMessages.forEach(msg => {
                displayMessage(msg.userId, msg.message);
            });
        })
        .catch(error => {
            console.error('Error fetching messages:', error);
        });
}

function sendMessage() {
    const userId = document.getElementById('user-id')?.value.trim();
    const message = document.getElementById('message-input')?.value.trim();

    if (!userId || !message) {
        alert('User ID dan pesan harus diisi!');
        return;
    }

    const messageData = {
        userId: userId,
        message: message,
        timestamp: new Date().toISOString()
    };

    // Tampilkan pesan langsung di chat box
    displayMessage(userId, message);

    // Kirim data ke Google Sheets melalui Apps Script
    fetch('https://script.google.com/macros/s/AKfycbxmPhNNFwXt-OrOAy22QqaFH5dAZOHiBRX6FQUzoqjStAyPOFAxEpRr-B0QeW-i_5h4/exec', {
        method: 'POST',
        body: JSON.stringify(messageData),
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors'
    })
        .then(() => {
            console.log('Pesan berhasil dikirim.');
        })
        .catch(error => {
            console.error('Error:', error);
        });

    // Kosongkan input pesan setelah dikirim
    document.getElementById('message-input').value = '';
}

function displayMessage(userId, message) {
    const chatBox = document.getElementById('chat-box');
    if (!chatBox) return; // Pastikan chat box ada sebelum menampilkan pesan

    // Cek jika pesan sudah ada di dalam chat box untuk menghindari duplikat
    const existingMessages = Array.from(chatBox.children).map(msg => msg.textContent);
    const newMessageContent = `${userId}: ${message}`;

    if (!existingMessages.includes(newMessageContent)) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('border', 'rounded', 'p-2', 'mb-2', 'bg-light');
        messageElement.textContent = newMessageContent;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll ke bawah untuk pesan terbaru
    }
}
