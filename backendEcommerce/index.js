import express from "express";
import dbConnect from "./dbConnect.js";
import "dotenv/config";
import userRouter from "./Routers/users.routers.js";
import cookieParser from "cookie-parser";
import cors from "cors";

let server = express();

let PORT = process.env.PORT || 3000;

server.use(express.json()); // it is used to read the data of req-->body
server.use(express.urlencoded({ extended: true })); // It will parse incoming data from url
server.use(cookieParser()); //this is used to read the cookie
server.use(
  cors({
    origin: "https://getkart.netlify.app",
    credentials: true,
  })
);

server.use("/users", userRouter);

dbConnect()
  .then(() => {
    console.log(" Database  is connected ");
    try {
      server.listen(PORT, () => {
        console.log("Server is running on  ", `http://localhost:${PORT}`);
      });
    } catch (err) {
      console.log("Server error ", err);
    }
  })
  .catch((err) => {
    console.log("Database Error", err);
  });
