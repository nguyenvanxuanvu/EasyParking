var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testSchema = new Schema({
    name:String,
    street:String
});

var Test = mongoose.model('Test', testSchema);

module.exports = Test;
