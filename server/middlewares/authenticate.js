const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");
const mongoose = require("mongoose");




module.exports = async (req, res,next) => {
  try {
    const { authorization } = req.headers;
    if(!authorization){
        return res.status(401).send("User not logged in")
    }
    const token = authorization.split(" ")[1];
    const decodedId = jwt.verify(token, process.env.SECRETKEY);
    if(!decodedId){
        return res.status(401).send("User not logged in")
    }
    const isAuthenticatedUser = await User.findById(decodedId)
     req.user = isAuthenticatedUser
    next()
  } catch (error) {
    console.log(error);
    res.status(400).send({error:error,Message:"User is not loggedIn"});
  }
};
