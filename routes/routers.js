const express = require("express");
const router = express.Router();

const {getAllProducts ,getAllProductsTesting} = require("../controllers/products");
const addProduct = require("../controllers/addProducts");
const {addUser} = require("../controllers/user");
const { getUsers } = require("../controllers/getUsers");
const { getUser } = require("../controllers/getUser");
const { getUserByName } = require("../controllers/getUserbyname");
const { updateUser } = require("../controllers/updateUser");
const { deleteUser } = require("../controllers/deleteUser");
const  like = require("../controllers/like");
const { createOrder } = require("../controllers/creatOrder");
const  addToCart = require("../controllers/addToCart");
const createBusiness = require("../controllers/CreateBusiness");
const { deleteBusiness } = require("../controllers/deleteBusiness");

router.route("/products").get(getAllProducts);
router.route("/user").post(addUser);
router.route("/testing").get(getAllProductsTesting);
router.route("/addProduct").post(addProduct);
router.route("/user").get(getUsers);
router.route("/user/:id").get(getUser);
router.route("/user/:name").get(getUserByName);
router.route("/user/:id").patch(updateUser);
router.route("/user/:id").delete(deleteUser);
router.route("/like").post(like);
router.route("/order").post(createOrder);
router.route("/cart").post(addToCart);
router.route("/business").post(createBusiness);
router.route("/business/:id").delete(deleteBusiness);

module.exports = router;


module.exports = router;