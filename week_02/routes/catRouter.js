'use strict'
const express = require('express');
const router = express.Router();
const multer = require('multer');
const catController = require('../controllers/catController.js');
const cat = require('../models/cat');
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
  .get(async (req, res) => {
    res.send(await cat.find());
  })
  .post(async (req, res) => {
    const newCat = await cat.create({name: 'Piita', age:2});
    res.send(`cat created with id ${newCat._id}`);
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
