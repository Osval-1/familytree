const Member = require("../models/member.model.js");
const mongoose = require("mongoose");

const getFamilyTree = async (req, res) => {
  try {
    const familyTree = await Member.find({});
    if (!familyTree[0]) {
      return res.status(400).send("Member doesn't exist,Create some");
    }
    res.status(200).send(familyTree);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
const AddFamilyMember = async (req, res) => {
  try {
    const { name, email, phoneNumber, dateOfBirth, placeOfResidence } =
      req.body;
    const newMember = new Member({
      name: name,
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber,
      dateOfBirth: dateOfBirth,
      placeOfResidence: placeOfResidence,
    });
    await newMember.save();
    res.status(200).send({ newMember });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = {
  getFamilyTree,
  AddFamilyMember,
};
