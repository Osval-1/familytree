const mongoose = require("mongoose");
const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;
    if(!name|!email|!password){
      return res.status(400).json({message:" please provide all information"});
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({message:" email already exists"});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({message:`User registered successfully,${newUser}`});
  } catch (error) {
    console.log(error);
    res.status(400).json({message:"error logging in"});;
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email|!password){
      return res.status(400).json({message:" please provide all information"});
    }
    const isUser = await User.findOne({ email });
    if (!isUser) {
      return res.status(400).json({message:" email doesn't exists"});
    }
    const comparePasswords = await bcrypt.compare(password, isUser.password);
    if (!comparePasswords) {
      return res.status(200).json({message:"Incorrect password"});
    }
    const token = jwt.sign(isUser.id, process.env.SECRETKEY);
    res.status(200).json({ ...isUser._doc, jwttoken: token });
  } catch (error) {
    console.log(error);
    res.status(400).json({message:"error logging in"});
  }
};

module.exports = {
  signup,
  login,
};
