const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = { $regex: company, $options: 'i' };
    }

    if(featured){
        queryObject.featured = featured;
    }

    if(name){
        queryObject.name = { $regex: name, $options: 'i' };
    }

    let apiData = Product.find(queryObject);

    if(sort){
        let sortFix = sort.replace(',',' ');
        apiData = apiData.sort(sortFix);
    }

    if(select){
        let selectFix = select.split(',').join(' ');
        apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;

    let skip = (page -1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    const myData = await apiData;
    res.status(200).json({myData});
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({msg : "I am get all products testing"});
};

module.exports = { getAllProducts, getAllProductsTesting};