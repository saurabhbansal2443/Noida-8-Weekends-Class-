import express from "express";

import { createUser , updateUser , replaceUser , deleteUser , allUser , signup, login} from "../Controllers/users.controllers.js";

let usersRouter = express.Router();


usersRouter 
  .post("/", createUser )
  .patch("/" , updateUser) 
  .put("/" , replaceUser)
  .delete("/" , deleteUser)
  .get("/" , allUser)
  .post("/signup" , signup)
  .post("/login" , login)
  // .get("/", allProducts)
  // .get("/:id", singleProduct)
  // .put("/:id", replaceProduct)
  // .patch("/:id", updateProduct)
  // .delete("/:id", deleteProduct);

  export default usersRouter;