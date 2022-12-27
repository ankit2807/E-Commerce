const router = require('express').Router();
const { createProduct, updateProduct, deleteProduct, getProduct, getProducts } = require("../controller/product");
const { verifyTokenAndAdmin } = require('../utils/verifyToken')

//create
router.post("/", verifyTokenAndAdmin, createProduct);

//update
router.put("/:id", verifyTokenAndAdmin, updateProduct);

//delete
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

//get single products
router.get("/find/:id", getProduct);

//get all products
router.get("/", getProducts);

module.exports = router;