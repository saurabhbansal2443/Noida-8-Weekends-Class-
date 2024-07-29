import express from "express";
import {
  Signup,
  Login,
  UpdateUser,
  GetUser,
  Logout,
} from "../Controllers/users.controller.js";
import auth from "../Middelwares/auth.middelware.js";

let Router = express.Router();

Router.post("/signup", Signup)
  .post("/login", Login)
  .patch("/update", auth, UpdateUser)
  .get("/", auth, GetUser)
  .post("/logout", auth, Logout);

export default Router;
