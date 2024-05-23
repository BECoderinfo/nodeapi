const User = require("../models/user");

const getUsers = async (req, res) => {

    try {
      const Users = await User.find();
      res.status(200).json(Users);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = { getUsers };