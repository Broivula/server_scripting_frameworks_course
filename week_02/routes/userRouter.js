'use strict'

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const user = require('../models/user.js');

router.param('id', (req, res, next) => {
  console.log(req.param.id);
  next();
});

router.route('/')
  .get(async (req, res) => {
    res.send(await user.find());
  })
  .post(async (req, res) => {
    const newUser = await user.create({
      name: req.body.name, 
      email: req.body.email, 
      password: req.body.password 
    });
  
    res.send(`new user created with the id of ${newUser._id}`)
  })
  .put((req, res) => {
    res.send('With this endpoint you can edit users');
  })
  .delete((req, res) => {
    res.send('With this endpoint you can delete users');
  })

router.route('/:id')
  .get(async (req, res) => {
    res.send(await user.findById(req.params.id));
  });

module.exports = router;
