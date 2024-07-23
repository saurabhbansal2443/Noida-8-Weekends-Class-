import express from 'express';
import  {Signup , Login , UpdateUser , GetUser , Logout} from "../Controllers/users.controller.js"


let Router = express.Router();

Router
.post("/signup" , Signup)
.post("/login" ,Login )
.patch("/update" , UpdateUser)
.get("/" ,GetUser)
.post("/logout" , Logout)


export default Router;