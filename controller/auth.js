const User = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register
const register = async (req, res) => {
    try {
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            photo: req.body.photo,
            phone: req.body.phone,
            isAdmin: req.body.isAdmin
        });

        const user = await User.findOne({ email: req.body.email });
        if (user) return res.status(403).json("Email Exists");

        //save new user
        await newUser.save();
        return res.status(201).json(newUser);
    } catch (err) {
        return res.status(500).json(err);
    }
};

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).json("Wrong credentials!");

        const validated = await bcrypt.compare(req.body.password, user.password);
        if (!validated) return res.status(400).json("Wrong credentials!");

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_SECRET);

        const { password, isAdmin, ...otherDetails } = user._doc;

        return res.cookie("access_token", token,
            { httpOnly: true, }
        ).status(200).json({ details: { ...otherDetails }, isAdmin });

    } catch (error) {
        return res.status(500).json(err);
    }
};

module.exports = {
    register,
    login
}