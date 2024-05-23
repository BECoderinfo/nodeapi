const Product = require("../models/product");

const addProduct = async (req, res) => {

    const data = req.body;
    console.log(data);

    res.status(200).json(data);
    
}

module.exports = addProduct;