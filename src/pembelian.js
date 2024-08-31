document.getElementById('paymentMethod').addEventListener('change', function() {
    var paymentMethod = this.value;
    var qrisImage = document.getElementById('qrisImage');
    
    if (paymentMethod === 'qris') {
        qrisImage.style.display = 'block';
    } else {
        qrisImage.style.display = 'none';
    }
});

document.getElementById('amount').addEventListener('input', function() {
    var amount = parseFloat(this.value);
    if (!isNaN(amount) && amount >= 5000) {
        var serviceFee = amount * 0.0005;
        var total = amount + serviceFee;
        document.getElementById('totalPurchase').textContent = "Rp " + total.toLocaleString('id-ID');
    } else {
        document.getElementById('totalPurchase').textContent = "Rp 0";
    }
});

document.getElementById('continueBtn').addEventListener('click', function() {
    var investorCode = document.getElementById('investorCode').value;
    var amount = document.getElementById('amount').value;
    var paymentMethod = document.getElementById('paymentMethod').value;
    var purchaseType = document.getElementById('purchaseType').value;

    var serviceFee = parseFloat(amount) * 0.0005;
    var total = parseFloat(amount) + serviceFee;
    
    document.getElementById('summaryInvestorCode').textContent = investorCode;
    document.getElementById('summaryAmount').textContent = "Rp " + parseFloat(amount).toLocaleString('id-ID');
    document.getElementById('summaryPaymentMethod').textContent = paymentMethod;
    document.getElementById('summaryPurchaseType').textContent = purchaseType;

    document.getElementById('purchaseForm').style.display = 'none';
    document.getElementById('summary').style.display = 'block';
});

document.getElementById('finishBtn').addEventListener('click', function() {
    var investorCode = document.getElementById('investorCode').value;
    var amount = document.getElementById('amount').value;
    var paymentMethod = document.getElementById('paymentMethod').value;
    var purchaseType = document.getElementById('purchaseType').value;

    var serviceFee = parseFloat(amount) * 0.0005;
    var total = parseFloat(amount) + serviceFee;

    var message = encodeURIComponent(`Pembelian:\nKode Investor: ${investorCode}\nJumlah: Rp ${parseFloat(amount).toLocaleString('id-ID')}\nJenis Pembayaran: ${paymentMethod}\nJenis Pembelian: ${purchaseType}\nTotal (termasuk biaya layanan): Rp ${total.toLocaleString('id-ID')}`);
    
    window.open(`https://wa.me/6287777483865?text=${message}`, '_blank');
});
