import express from "express";

import productRouter from "./Routes/products.routes.js";
import usersRouter from "./Routes/users.routes.js";

let server = express();

let port = 3000;

server.use(express.json());

server.use("/products", productRouter);
server.use("/users", usersRouter);

server.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`);
});
