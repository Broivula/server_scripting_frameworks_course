'use strict'
const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController.js');
const cat = require('../models/cat');


router.route('/')
  .get(async (req, res) => {
    res.send(await cat.find().populate('owner'));
  })
  .post(async (req, res) => {
    const newCat = await cat.create({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      color: req.body.color,
      weight: req.body.weight,
    });
    res.send(`cat created with id ${newCat._id}`);
  })
  .patch(async (req, res) => {
    console.log(req.body);
    const modifiedCat = await cat.updateOne({ _id: req.body.id },
      {
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        color: req.body.color,
        weight: req.body.weight,
        owner: req.body.owner,
      });
    res.status(200).send(`${req.body.name} updated succesfully!`);
  })
  .delete(async (req, res) => {
    console.log('deleting..');
    await cat.deleteOne({_id: req.body.id});
    res.status(200).send('success');
  })


module.exports = router;
