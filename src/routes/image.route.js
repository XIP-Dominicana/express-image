const express = require('express');
const route = express.Router();

const path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../', 'public/img'),
    filename: (req, file, callback) => {
        const filename = new Date().valueOf();
        const extension = file.originalname.slice(file.originalname.lastIndexOf('.'));
        callback(null, filename + extension);
    }
})

const upload = multer({
    storage,
    dest: path.join(__dirname, '../../', 'public/img')
}).single('image');

route.post('/', upload, (req, res) => {
    res.status(200).send('Ok!');
});

module.exports = route;
