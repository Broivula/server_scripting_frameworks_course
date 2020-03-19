'use strict'

const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: './uploads/'});
const userController = require('../controllers/userController.js');
const passport = require('../utils/pass.js');
const user_list = [];

passport.authenticate('jwt', {session: false});

router.param('id', (req, res, next, id) => {
  req.user = { id }
  next();
});

router.route('/')
  .get(userController.user_list_get)
  .post((req, res) => {
    console.log(req.body);

    res.send('With this endpoint you can add users');
  })
  .put((req, res) => {
    res.send('With this endpoint you can edit users');
  })
  .delete((req, res) => {
    res.send('With this endpoint you can delete users');
  })

router.route('/:id')
  .get(userController.user_get);

module.exports = router;
