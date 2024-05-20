const express = require("express");
const {
  getFamilyTree,
  AddFamilyMember,
} = require("../controllers/genealogy.controller");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();
router.use(authenticate)

router.get("/family-tree",getFamilyTree);
router.post("/add-member",AddFamilyMember);

module.exports = router;
