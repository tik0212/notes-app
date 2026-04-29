const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
// const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const noteRoutes = require("./routes/noteRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("🍃 MongoDB connected successfully!"))
  .catch((err) => console.log("❌ Mongo connection error:", err));

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
