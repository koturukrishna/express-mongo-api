const express = require("express");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes.js");

const app = express();
dotEnv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongodb connected successfully");
  })
  .catch((error) => {
    console.log("connection error", error);
  });

app.get("/", (req, res) => {
  res.send("<h2>Hey Krishna Welcome! Nice</h2>");
});

app.use("/api", userRouter);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT} port number`);
});
