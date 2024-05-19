const mongoose = require("mongoose");
const Member = require("../models/member.model.js");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    console.log(req.body);
    const {
      name,
      email,
      dateOfBirth,
      placeOfResidence,
      phoneNumber,
      password,
    } = req.body;
    const existingMember = await Member.findOne({ email });
    if (existingMember) {
      return res.status(400).send("Family Member already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newMember = new Member({
      name: name,
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber,
      dateOfBirth: dateOfBirth,
      placeOfResidence: placeOfResidence,
    });
    await newMember.save();
    res.status(201).send(`Family Member registered successfully,${newMember}`);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isMember = await Member.findOne({ email });
    if (!isMember) {
      return res.status(400).send("Member doesn't exist");
    }
    const comparePasswords = await bcrypt.compare(
      password,
      isMember.password
    );
    if (!comparePasswords) {
      return res.status(200).send("Incorrect password");
    }
    const token = jsonwebtoken.sign(isMember.id, process.env.SECRETKEY);
    res.status(200).json({ ...isMember._doc, jwttoken: token });
  } catch (error) {
    console.log(error);
    res.status(400).send("error logging in");
  }
};

module.exports = {
  signup,
  login,
};
