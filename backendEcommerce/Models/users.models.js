import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

let { Schema, model } = mongoose;

let Address = new Schema({
  houseNumber: { type: Number },
  city: { type: String },
  country: { type: String },
});

let userSchema = new Schema({
  userName: { type: String, min: [2, "userName is too short"] },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, min: [6, "password is too short"] },
  phoneNumber: { type: Number, min: [10], max: [12] },
  address: { type: [Address], default: [] },
});

userSchema.pre("save", async function (next) {
  let user = this;

  if (!user.isModified("password")) {
    return next();
  }

  try {
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
  } catch (err) {
    console.log(err);
  }
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = function () {
  let token = jwt.sign(
    { id: this._id, email: this.email },
    process.env.PRIVATE_KEY 
  );
  return token;
};

let User = model("User", userSchema);

export default User;
