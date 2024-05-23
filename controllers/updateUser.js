const User = require("../models/user");

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = { updateUser }