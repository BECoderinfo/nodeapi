const orders = require("../models/orders");

const createOrder = async (req, res) => {

    const data = req.body;
    console.log(data);

    const newOrder = new orders(data);
    await newOrder.save();

    res.status(200).json(data);
    
}

module.exports = {createOrder};