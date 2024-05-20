const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");


const authRoutes = require("./routes/auth.route");
const genealogyRoutes = require("./routes/genealogy.route");

const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

mongoose.connect(process.env.MONGOURL);
mongoose.connection.on("connected", () => {
  console.log("connected to mongoDB");
});
mongoose.connection.on("error", (err) => {
  console.log("error connecting to mongoDB", err);
});

app.use(cors(corsOptions));
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/genealogy", genealogyRoutes);


app.listen(process.env.PORT, () => {
  console.log("server is running on port", process.env.PORT);
});
