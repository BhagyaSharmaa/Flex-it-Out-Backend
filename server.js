const express = require("express");

require("dotenv").config();

const mongoose = require("mongoose");

const app = express();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 4000;

mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Connection successfull"))
    .catch((err) => console.log("Connection not found", err));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running ");
});

app.post("/signup", (req, res) => {
    // signup logic
});

app.listen(PORT, () => {
    console.log(`Server running or PORT ${PORT}`);
});
