const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    status: Boolean,
    age: String,
    level: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;