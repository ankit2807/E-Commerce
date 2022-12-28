const router = require('express').Router();
const { getCart, updateCart, deleteCart, createCart, getAllCart } = require("../controller/cart");
const { verifyTokenAndAdmin } = require('../utils/verifyToken')

//create
router.post("/", verifyTokenAndAdmin, createCart);

//update
router.put("/:id", verifyTokenAndAdmin, updateCart);

//delete
router.delete("/:id", verifyTokenAndAdmin, deleteCart);

//get single cart detail
router.get("/find/:id", getCart);

//get all cart details
router.get("/", getAllCart);

module.exports = router;