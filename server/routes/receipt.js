const express = require("express");

const router = express.Router();

router.post("/split", (req, res) => {
    const { totalAmount, people } = req.body;

    if (!totalAmount || !people || people <= 0) {
        return res.status(400).json({
            error: "Invalid input"
        });
    }

    const amountPerPerson = totalAmount / people;

    res.json({
        totalAmount,
        people,
        amountPerPerson: amountPerPerson.toFixed(2)
    });
});

module.exports = router;
