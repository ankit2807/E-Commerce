const router = require('express').Router();
const { updateUser, deleteUser, getUser, getUsers } = require("../controller/admin");
const { verifyTokenAndAdmin } = require('../utils/verifyToken')

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateUser);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteUser);

//GET
router.get("/:id", verifyTokenAndAdmin, getUser);

//GET ALL
// router.get("/", verifyTokenAndAdmin, getUsers);

//Logout
// router.post( "/:id/logout" , verifyTokenAndAdmin, logout);

module.exports = router;