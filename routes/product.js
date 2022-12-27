const router = require('express').Router();
const { createProduct, updateProduct, deleteProduct, getProduct, getProducts, softDeleteProducts, findDeletedProduct } = require("../controller/product");
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

//soft delete count
router.delete("/soft/:id", softDeleteProducts);

//soft delete products
router.get("/soft/details", findDeletedProduct);

module.exports = router;