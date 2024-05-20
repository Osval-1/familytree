const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfBirth: { type: String, required: true },
  placeOfResidence: {
    type: String,
    required: true,
  },
  mother: {
    type: String,
  },
  father: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

const Member = mongoose.model("Member", memberSchema);
module.exports = Member;
