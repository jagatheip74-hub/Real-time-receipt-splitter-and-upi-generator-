const express = require("express");

const router = express.Router();

router.post("/generate", (req, res) => {
    const { upiId, amount } = req.body;

    if (!upiId || !amount) {
        return res.status(400).json({
            error: "UPI ID and amount are required."
        });
    }

    const upiLink = `upi://pay?pa=${upiId}&pn=ReceiptSplitter&am=${amount}&cu=INR`;

    res.json({
        success: true,
        upiLink
    });
});

module.exports = router;
