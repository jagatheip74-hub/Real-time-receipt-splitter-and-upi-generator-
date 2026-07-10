document.getElementById('splitBtn').addEventListener('click', () => {
    const totalAmount = parseFloat(document.getElementById('totalAmount').value);
    const peopleCount = parseInt(document.getElementById('peopleCount').value);
    const resultElement = document.getElementById('result');

    if (isNaN(totalAmount) || isNaN(peopleCount) || peopleCount <= 0 || totalAmount <= 0) {
        alert('Please enter valid positive numbers for amount and people.');
        return;
    }

    const share = (totalAmount / peopleCount).toFixed(2);
    resultElement.innerText = `Each person should pay: ₹${share}`;
});

document.getElementById('generateUpiBtn').addEventListener('click', () => {
    const upiId = document.getElementById('upiId').value;
    const eachPayText = document.getElementById('result').innerText; 
    const amount = eachPayText.replace(/[^0-9.]/g, ''); 

    if (!upiId || !amount) {
        alert('Please calculate the split bill first and enter a valid UPI ID.');
        return;
    }

    const upiLink = `upi://pay?pa=${upiId}&pn=ReceiptSplitter&am=${amount}&cu=INR`;
    
    const resultBox = document.getElementById('upiResult');
    resultBox.style.display = 'block';
    resultBox.value = upiLink;

    const qrContainer = document.getElementById('qrcode-container');
    qrContainer.innerHTML = '';

    new QRCode(qrContainer, {
        text: upiLink,
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff"
    });
});
