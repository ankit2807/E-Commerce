const multer = require("multer");
const router = require('express').Router();

//upload logic
const upload = multer({
    dest: 'public',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|jfif)$/)) {
            return cb(new Error('Please upload a Image'))
        }
        cb(undefined, true)
    }
});

//upload the image
router.post('/', upload.array('image'), (req, res) => {
    res.status(200).json('Images uploaded')
}, (error, req, res) => {
    res.status(400).send({ error: error.message })
});

module.exports = router;