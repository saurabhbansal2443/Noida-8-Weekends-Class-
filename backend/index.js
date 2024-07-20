import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

import productRouter from "./Routes/products.routes.js";
import usersRouter from "./Routes/users.routes.js";

let server = express();

let port = process.env.PORT;

server.use(express.json());

server.use("/products", productRouter);
server.use("/users", usersRouter);

async function dbConnect() {
  return await mongoose.connect(process.env.MONGODB_URI);
}

dbConnect()
  .then(() => {
    console.log(" Db connected ");
    server.listen(port, () => {
      console.log(`Server is running on  http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log(" Error in connecting to database ");
  });
