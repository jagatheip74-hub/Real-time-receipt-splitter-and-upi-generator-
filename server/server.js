const express = require("express");
const cors = require("cors");

const receiptRoutes = require("./routes/receipt");
const upiRoutes = require("./routes/upi");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/receipt", receiptRoutes);
app.use("/api/upi", upiRoutes);

app.get("/", (req, res) => {
    res.send("Real-Time Receipt Splitter & UPI Generator API is running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
