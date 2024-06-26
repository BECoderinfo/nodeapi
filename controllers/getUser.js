const User = require("../models/user");

const getUser = async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = { getUser };