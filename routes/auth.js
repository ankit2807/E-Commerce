const router = require('express').Router();
const { register, login, logout } = require("../controller/auth");
const { verifyToken } = require('../utils/verifyToken');

//Register
router.post('/register', register);
//Login
router.post("/login", login);
//Logout
router.post("/logout", verifyToken, logout);

module.exports = router;