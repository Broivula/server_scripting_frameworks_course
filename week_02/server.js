'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const catRoute = require('./routes/catRouter.js');
const userRoute = require('./routes/userRouter.js');
const db = require('./db.js');

app.use(express.json({strict: true}));
app.use(express.urlencoded({extended: false}));

db.on('connected', () => {
  app.use('/cat', catRoute);
  app.use('/user', userRoute);
  app.get('/', (req, res) => {
  });
  
  app.listen(port, () => console.log(`server connected, listening on port ${port}!`));

});
