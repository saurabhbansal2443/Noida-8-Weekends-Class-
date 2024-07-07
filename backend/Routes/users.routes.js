import express from "express";

import {
    createProduct,
    updateProduct,
    deleteProduct,
    replaceProduct,
    allProducts,
    singleProduct,
  } from "../Controllers/users.controllers.js";
  

let usersRouter = express.Router();


usersRouter 
  .post("/", createProduct)
  .get("/", allProducts)
  .get("/:id", singleProduct)
  .put("/:id", replaceProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct);

  export default usersRouter;