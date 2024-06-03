const cart = require("../models/cart");

const removeFromCart = async (req, res) => {

    const data = req.body;
    console.log(data);

    const response = await cart.findebyIdAndDelete(data._id);

    res.status(200).json(response);
}

module.exports = removeFromCart;