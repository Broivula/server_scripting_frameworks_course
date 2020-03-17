'use strict'
const express = require('express');
const router = express.Router();
const multer = require('multer');
const catController = require('../controllers/catController.js');

// configure filenames

const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, './uploads/')
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

router.param('id', (req, res, next, id) => {
  req.cat = { id }
  next();
});

router.route('/')
  .get(catController.cat_list_get)
  .post(upload.single('cat'),(req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.send('With this endpoint you can add cats');
  })
  .put((req, res) => {
    res.send('With this endpoint you can edit cats');
  })
  .delete((req, res) => {
    res.send('With this endpoint you can delete cats');
  })

router.route('/:id')
  .get(catController.cat_get);

module.exports = router;
