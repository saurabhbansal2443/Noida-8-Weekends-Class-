import {mongoose} from "mongoose";

let { Schema  , model } = mongoose;

let userSchema = new Schema({
    userName : {type : String , unique : true, lowercase : true , required : true  },
    email : {type : String , unique : true, required : true  },
    password : {type : String , required : true , min : [8 , "Password is too--short"]},
    phoneNumber : { type : Number },
})

let User  = model("User" , userSchema);

export default User;

