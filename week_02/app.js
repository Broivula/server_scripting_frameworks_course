'use strict';
const express = require('express');
const app = express();
const port = 3000;
const cat = require('./routes/catRouter.js');
const user = require('./routes/userRouter.js');
const authRoute = require('./routes/authRoute.js');
const passport = require('./utils/pass.js');

app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());
app.use('/cat', cat);
app.use('/user', user);
app.use('/auth', authRoute);

app.get('/', (req, res) => {
  res.send('Home');
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
