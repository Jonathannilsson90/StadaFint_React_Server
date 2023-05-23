const User = require("../models/Usermodel");

exports.registerUser = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      isCustomer: req.body.isCustomer,
    });
    await user.save();
    res.status(200).json({
      Message: `You just got registered! Welcome.`,
      username: req.body.username,
    });
  } catch (error) {
    res.status(400).json({ Message: "Error registering user." });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    res.json(await User.deleteOne({_id:req.params.userId}))
 
    res.status(200).json({ Message: `User deleted.` });
  } catch (error) {
    res.status(400).json({ Message: error });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    // Get all users from the database
    const users = await User.find();

    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({ Message: error });
  }
};

exports.updateUser = async (req, res) => {
  try {
    res.json(
      await User.updateOne(
        { _id: req.params.userId },
        {
          $set: {
            name: req.body.name,
            isCustomer: req.body.isCustomer,
          },
        }
      )
    );
  } catch (error) {
    res.status(400).json({ Message: error });
  }
};
