const express = require("express");
const app = express();
const mongoose = require("mongoose");

const router = require("./routes/route");
const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("dotenv").config();

app.use(cors());


app.use("/", router);

if (process.env.DataBase_Connection) {
  try {
    mongoose.connect(process.env.DataBase_Connection, {
      useNewUrlParser: true,
    });
  } catch (err) {
    console.log("errr  while connecting db", "errr");
  }
}
app.listen(3001, () => console.log("server is running"));