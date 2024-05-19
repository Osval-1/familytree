const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/auth.route");

const app = express();

mongoose.connect(process.env.MONGOURL);

mongoose.connection.on("connected", () => {
  console.log("connected to mongoDB");
});
mongoose.connection.on("error", (err) => {
  console.log("error connecting to mongoDB", err);
});

app.use(express.json());
app.use("/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log("server is running on port", process.env.PORT);
});
