const express = require("express");
const {
  getFamilyTree,
  AddFamilyMember,
} = require("../controllers/genealogy.controller");

const router = express.Router();

router.get("/family-tree",getFamilyTree);
router.post("/add-member",AddFamilyMember);

module.exports = router;
