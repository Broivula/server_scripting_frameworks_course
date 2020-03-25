'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const catRoute = require('./routes/catRouter.js');
const user = require('./routes/userRouter.js');
const db = require('./db.js');

db.on('connected', () => {
  app.use(express.static('public'));
  app.use('/cat', catRoute);

  app.get('/', (req, res) => {
  });
  
  app.listen(port, () => console.log(`server connected, listening on port ${port}!`));

});
