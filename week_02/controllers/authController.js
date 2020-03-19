'use strict' 
const jwt = require('jsonwebtoken');
const passport = require('../utils/pass');


const login = (req, res) => {
  console.log('im here');

  return passport.authenticate('local', {session: false}, (err, user, info) => {
    console.log('authenticating ', user);
    if(err || !user){
      return res.status(400).json({
        'message': 'error',
        'user' : user,
      });
    }
    req.login(user, {session:false}, (err) => {
      if(err) res.send(err);
    });

    const token = jwt.sign(user, 'secret_token');
    return res.json({user, token});
  });
  console.log('now here');
};

module.exports = {
  login,
}
