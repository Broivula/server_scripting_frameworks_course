// Controller
'use strict';
const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
  console.log('here test');
  const cat = cats.filter((cat) => { 
   return cat.id == req.cat.id;
  });
  res.json(cat);
};
   
module.exports = {
  cat_list_get,
  cat_get,
};
