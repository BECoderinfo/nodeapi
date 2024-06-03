const like = require("../models/like");

const liked = async (req, res) => {

    const data = req.body;
    console.log(data);

    const newLike = new like(data);
    await newLike.save();

    res.status(200).json(data);
    
}

module.exports = liked;