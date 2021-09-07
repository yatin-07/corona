import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import router from "./routes/route.js";
import routeruser from "./routes/user.js";
import dotenv from "dotenv";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config();
// require("dotenv").config();

app.use(cors());

app.use("/", router);
app.use("/user", routeruser);

if (process.env.DataBase_Connection) {
  try {
    mongoose.connect(process.env.DataBase_Connection, {
      useNewUrlParser: true,
    });
  } catch (err) {
    console.log("errr  while connecting db", "errr");
  }
}
app.listen(4001, () => console.log("server is running"));
