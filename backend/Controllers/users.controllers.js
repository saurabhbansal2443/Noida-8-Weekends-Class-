import User from "../models/user.model.js";
import bcrypt from "bcrypt";

// Create
let createUser = async (req, res) => {
  let data = req.body; //{email : " abc@xyz.com" , password : "134rtyu" , userName : "hgcdcgdc"}

  let newUser = new User(data);

  let userData = await newUser.save();

  res.send(userData);
};

let updateUser = async (req, res) => {
  let { email } = req.body;

  let userData = await User.findOneAndUpdate({ email: email }, req.body, {
    new: true,
  });

  res.send(userData);
};

let replaceUser = async (req, res) => {
  let { email } = req.body;

  let userData = await User.findOneAndReplace({ email: email }, req.body, {
    new: true,
  });

  res.send(userData);
};

let deleteUser = async (req, res) => {
  let { email } = req.body;
  let userData = await User.findOneAndDelete({ email: email });
  res.send(userData);
};

let allUser = async (req, res) => {
  let data = await User.find();
  res.send(data);
};

let signup = async (req, res) => {
  // { userName , email , password };
  let { email, userName, password } = req.body;
  let user = await User.findOne({ email: email });

  if (user) {
    // if already present
    res.send({ result: false, message: " User already Exist " });
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const newUser = new User({
    email: email,
    password: hashedPassword,
    userName: userName,
  });

  let data = await newUser.save();

  res.send({result : true , message : "User created" , data : data });
};

let login = async (req, res) => {
  let { email , password} = req.body;

  // is user presetn 

  let user = await User.findOne({email : email });

  if ( !user){ // If user is not present 
    res.send( { result : false, message : " User not exist "})
  }

  let result  = bcrypt.compareSync(password , user.password );

  if( result == true ){
    res.send( { result : true , message: " Login Succesfull " , data : user })
  }else {
    res.send( { result : false, message : "password is wrong " })
  }



}


export { createUser, updateUser, replaceUser, deleteUser, allUser , signup , login  };

// updateUser
// ReplaceUser
// DeleteUser
// Alluser
// SingleUser
// LOGIN
// Signup  // CreateUser
