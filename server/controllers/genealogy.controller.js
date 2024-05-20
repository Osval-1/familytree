const Member = require("../models/member.model.js");
const mongoose = require("mongoose");


const getFamilyTree=async(req,res)=>{
try {
    const familyTree = await Member.find({})
} catch (error) {
    console.log(error);
    res.status(400).send(error);
}
}
const AddFamilyMember=async(req,res)=>{
  try {
    const {name,email,phoneNumber,dateOfBirth,placeOfResidence} = req.body
      const newMember = new Member({
        name: name,
        email: email,
        password: hashedPassword,
        phoneNumber: phoneNumber,
        dateOfBirth: dateOfBirth,
        placeOfResidence: placeOfResidence,
      });
      await newMember.save()
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

module.exports = {
    getFamilyTree,AddFamilyMember
}