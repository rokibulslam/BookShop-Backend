const express = require("express");
require("dotenv").config();
const app = new express();
const cors = require("cors");
const { connectDB } = require("./config/db");
const router = require("./routes/v1/api");
const { notFound, errorHandler } = require("./middleware/errorHandler");
const PORT = process.env.PORT || 5000;
// middleware
app.use(cors());
app.use(express.json());

connectDB();
app.get("/", (req, res) => {
  res.send("API is Running");
});

app.use("/api/v1", router);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`server is Started on ${PORT}`)
);
