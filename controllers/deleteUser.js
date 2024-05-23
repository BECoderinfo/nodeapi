const User = require("../models/user");

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = { deleteUser };