const Member = require("../models/member.model");
const mongoose = require("mongoose");
const initialParents = require("./data")

module.exports = async (req, res) => {
  try {
    const data = await Member.find({});
    if (data[0]) {
      return;
    }
    await Member.create(initialParents)
  } catch (error) {
    console.log(error)
  }
};
