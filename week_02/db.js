const mongoose = require('mongoose');

try{
  mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
  console.log('database connected');
}catch(err){
  console.log('err in connecting db: ' + err);
}

module.exports = mongoose.connection;
