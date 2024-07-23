import User from "../Models/users.models.js";

let cokkieOption = {
  httpOnly: true,
  secure: true,
  sameSite: "None",
};

let Signup = async (req, res) => {
  let { email } = req.body;

  try {
    let existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(403)
        .send({ result: false, message: "User already exist " });
    }

    let newUser = new User(req.body);
    let userData = await newUser.save();

    let token = await newUser.generateToken();

    res
      .status(200)
      .cookie("Token", token, cokkieOption)
      .send({ result: true, message: "user Created success ", data: userData });
  } catch (err) {
    res.status(500).send({ result: false, message: err.message });
  }
};

let Login = async (req, res) => {
  let { email, password } = req.body;

  try {
    let existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      return res.status(402).send({ result: false, message: "user not exist" });
    }

    let passwordCheckResult = await existingUser.comparePassword(password);

    if (passwordCheckResult) {
        let token = await existingUser.generateToken();
      return res
        .status(201)
        .cookie("Token", token, cokkieOption)
        .send({ result: true, message: " Login succesfull " });
    } else {
      return res
        .status(402)
        .send({ result: false, message: "Password is incorrect" });
    }
  } catch (err) {
    res.status(500).send({ result: false, message: err.message });
  }
};

let UpdateUser = (req, res) => {};

let GetUser = (req, res) => {};

let Logout = (req, res) => {};

export { Signup, Login, UpdateUser, GetUser, Logout };

// Signup
// login

// updateUser
// getUser
// logout
