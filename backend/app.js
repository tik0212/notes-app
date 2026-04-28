const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
// const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🍃 MongoDB подключена успешно!"))
  .catch((err) => console.log("❌ Ошибка подключения к MongoDB:", err));

app.use(express.json());
app.use(cors());
app.use(helmet());
// app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`)
});