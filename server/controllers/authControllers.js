import user from "../modles/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const User = await user.findOne({ email });
    if (!User) {
      return res.status(404).json({
        message: "User is not  registered , Please register and try  again",
      });
    }
    const isMatch = await bcrypt.compare(password, User.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "password do not match",
      });
    }

    const token = jwt.sign(
      { id: User._id, name: User.name, email: User.email },
      "hello_this_string",
      { expiresIn: "1d" }
    );
    console.log(User);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 24 * 60,
    });
    res.status(200).json({
      preferences: User.preferences,
      message: "login SuccessFull",
    });
  } catch (error) {}
};

export const verify = async (req, res) => {
  console.log("verify Wali", req.user);
  if (!req.user) {
  } else {
    return res.status(200).json({
      authenticated: true,
      id: req.user.id,
      email: req.user.email,
      name: req.user.name,
    });
  }
};

export const Register = async (req, res) => {
  try {
    const { name, password, email } = req.body;

    const User = await user.findOne({ email });
    console.log(User);
    if (User) {
      return res.status(404).json({
        message: "User is already register ,Please Login",
      });
    }
    const hashedpassword = await bcrypt.hash(password, 12);
    const newUser = await user.create({
      name,
      password: hashedpassword,
      email,
    });

    res.status(201).json({
      data: newUser,
      message: "successfully Registered",
    });
  } catch {}
};
