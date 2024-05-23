const business = require("../models/Business");

const deleteBusiness = async (req, res) => {
    try {
        const deletedBusiness = await business.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedBusiness);
    } catch (error) {
        res.status(400).json(error);
    }        
};