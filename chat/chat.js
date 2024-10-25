document.addEventListener('DOMContentLoaded', fetchMessages);
document.getElementById('send-btn').addEventListener('click', sendMessage);

function fetchMessages() {
    fetch('https://script.google.com/macros/s/AKfycbxmPhNNFwXt-OrOAy22QqaFH5dAZOHiBRX6FQUzoqjStAyPOFAxEpRr-B0QeW-i_5h4/exec')
        .then(response => response.json())
        .then(data => {
            data.forEach(msg => {
                displayMessage(msg.userId, msg.message);
            });
        })
        .catch(error => {
            console.error('Error fetching messages:', error);
        });
}

function sendMessage() {
    const userId = document.getElementById('user-id').value.trim();
    const message = document.getElementById('message-input').value.trim();

    if (userId === '' || message === '') {
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
    .catch(error => {
        console.error('Error:', error);
    });

    // Kosongkan input pesan setelah dikirim
    document.getElementById('message-input').value = '';
}

function displayMessage(userId, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('border', 'rounded', 'p-2', 'mb-2', 'bg-light');
    messageElement.textContent = `${userId}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
