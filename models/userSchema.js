const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const createUser = new Schema({
  userName : {type : String, uniqe : true, trim : true},
  email : {type : String, uniqe : true, trim : true},
  password : {type : String, trim : true}
});

const UserModel = mongoose.model('User', createUser);

module.exports = UserModel;