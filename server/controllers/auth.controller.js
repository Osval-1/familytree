const mongoose = require("mongoose");
const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    console.log(req.body);
    const {
      name,
      email,
      password,
    } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(401).send(" User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).send(`User registered successfully,${newUser}`);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUser = await User.findOne({ email });
    if (!isUser) {
      return res.status(401).send("User doesn't exist");
    }
    const comparePasswords = await bcrypt.compare(password, isUser.password);
    if (!comparePasswords) {
      return res.status(200).send("Incorrect password");
    }
    const token = jsonwebtoken.sign(isUser.id, process.env.SECRETKEY);
    res.status(200).json({ ...isUser._doc, jwttoken: token });
  } catch (error) {
    console.log(error);
    res.status(400).send("error logging in");
  }
};

module.exports = {
  signup,
  login,
};
