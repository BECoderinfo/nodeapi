const cart = require("../models/cart");

const addToCart = async (req, res) => {

    const data = req.body;
    console.log(data);

    const newCart = new cart(data);
    await newCart.save();

    res.status(200).json(newCart);
}

module.exports = addToCart;