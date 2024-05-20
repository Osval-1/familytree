const express = require("express");
const {
  getFamilyTree,
  AddFamilyMember,AddParents
} = require("../controllers/genealogy.controller");
const authenticate = require("../middlewares/authenticate");
const populateDB = require("../utils/populateDB");

const router = express.Router();
router.use(authenticate);

populateDB();

router.get("/family-tree", getFamilyTree);
router.post("/add-member", AddFamilyMember);
router.post("/add-parents", AddParents);

module.exports = router;
