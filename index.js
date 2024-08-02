const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

const Name = require("./src/model/Name");
const Surname = require("./src/model/Surname");
const Routes = require("./src/routes/routes");

const { MONGODB_URL } = process.env

mongoose.connect( MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.error("MongoDB connection error:", err));

app.use(Routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log("server is running!!");
})