'use strict';
const express = require('express');
const app = express();
const port = 3000;
const cat = require('./routes/catRouter.js');
const user = require('./routes/userRouter.js');

app.use(express.static('public'));
app.use('/cat', cat);
app.use('/user', user);

app.get('/', (req, res) => {
  res.send('Home');
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
