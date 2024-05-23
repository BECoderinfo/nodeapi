const business = require("../models/Business");

const createBusiness = async (req, res) => {
    try {
        const newBusiness = new business(req.body);
        const savedBusiness = await newBusiness.save();
        res.status(201).json(savedBusiness);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = createBusiness;