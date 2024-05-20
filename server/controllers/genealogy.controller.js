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
    const { name, email, phone, dateOfBirth, placeOfResidence } =
      req.body;
    if (!email | !name|!placeOfResidence|!dateOfBirth|!phone) {
      return res.status(400).json({message:"please fill in all fields"})
    }
    const newMember = new Member({
      name: name,
      email: email,
      phoneNumber: phone,
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
