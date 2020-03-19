'use strict'
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const userModel = require('../models/userModel');

const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new Strategy(
  (username, password, done) => {
  const params = [username];
    try{
      const [user] = userModel.get_user_login(params);
      if(user === undefined){
        return done(null, false, {'message': 'incorrect email'});
      }
      if(user.password !== password){
        return done(null, false, {'message' : 'incorrect password'});
      }
      return done(null, (user), {'message' : 'log in successfull'});
    }catch(err){
      return done(err);
    }
  }
));


passport.use(new JWTStrategy({
    'jwtFromRequest' : ExtractJWT.fromAuthHeaderAsBearerToken(),
    'secretOrKey' : 'secret_token',
    },(jwtPayload, done) => {
      console.log('here in jwt strat');
      const [user] = userModel.get_user_login(jwtPayload.id);
      if(user === undefined){
        return done(null, false, {'message': 'incorrect email'});
      }
      return done(null, (user), {'message' : 'log in successfull'});
    } 

));

module.exports = passport;
