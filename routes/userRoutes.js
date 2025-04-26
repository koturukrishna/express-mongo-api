const express = require("express");
const router = express.Router();
const userContoller = require("../controllers/userControllers");
const User = require("../model/userModel");

router.post("/add-user", userContoller.createUser);
router.get("/users", userContoller.getUsers);
router.get("/user/:id", userContoller.getUser);
router.put("/update-user/:id", userContoller.updateUser);
router.delete("/delet-user/:id", userContoller.deleteUser);

module.exports = router;
