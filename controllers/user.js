const User = require("../models/user");

const addUser = async (req, res) => {

    try {
        const user = new User( req.body);
        const createUser = await user.save();
        res.status(201).json(createUser);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = { addUser };