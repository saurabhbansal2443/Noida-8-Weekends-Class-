import express from "express";

import {
    createProduct,
    updateProduct,
    deleteProduct,
    replaceProduct,
    allProducts,
    singleProduct,
  } from "../Controllers/products.controllers.js";
  

let productRouter = express.Router();


productRouter 
  .post("/", createProduct)
  .get("/", allProducts)
  .get("/:id", singleProduct)
  .put("/:id", replaceProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct);

  export default productRouter;