const User = require('../models/user');

const getUserByName = async (req, res) => {
    const name = req.params.name;

    if (!name) {
        return res.status(400).json({ message: 'Please provide a name' });
    }

    try {
        const user = await User.findOne({name: name});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getUserByName };