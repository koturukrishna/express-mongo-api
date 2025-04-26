const User = require("../model/userModel");

const createUser = async (req, res) => {
  try {
    const { name, email, address } = req.body;
    const user = new User({
      name,
      email,
      address,
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.log("there is an error", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log("server side error");
    res.status(500).json({ message: "Server Error" });
  }
};

const getUser = async (req, res) => {
  console.log(req.params.id);

  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      console.log("user is not available");
      res.status(404).json({ message: "User not available" });
    }
  } catch (error) {
    console.log("server side error");
    res.status(500).json({ message: "Server Error" });
  }
};

const updateUser = async (req, res) => {
  console.log(req.params.id);
  const { name, email, address } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, address },
      { new: true }
    );
    if (user) {
      res.status(201).json(user);
    } else {
      console.log("user is not available");
      res.status(404).json({ message: "User not Updated" });
    }
  } catch (error) {
    console.log("server side error");
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.status(204).json({ message: "User deleted successfully" });
    } else {
      console.log("user is not available");
      res.status(404).json({ message: "User not available" });
    }
  } catch (error) {
    console.log("server side error");
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { createUser, getUsers, getUser, updateUser, deleteUser };
