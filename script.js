function splitBill() {
    let bill = parseFloat(document.getElementById("billAmount").value);
    let people = parseInt(document.getElementById("people").value);

    if (isNaN(bill) || isNaN(people) || people <= 0) {
        alert("Please enter a valid bill amount and number of people.");
        return;
    }

    let share = bill / people;

    document.getElementById("result").innerHTML =
        "Each person should pay: ₹" + share.toFixed(2);
}

function generateUPI() {
    let upi = document.getElementById("upi").value;
    let bill = parseFloat(document.getElementById("billAmount").value);
    let people = parseInt(document.getElementById("people").value);

    if (isNaN(bill) || isNaN(people) || people <= 0 || upi === "") {
        alert("Please fill all fields first.");
        return;
    }

    let share = (bill / people).toFixed(2);

    let link = `upi://pay?pa=${upi}&pn=ReceiptSplitter&am=${share}&cu=INR`;

    document.getElementById("upiLink").value = link;
}
