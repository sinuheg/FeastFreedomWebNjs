var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Country = mongoose.model('Country', new Schema({
    name: String,
    countrycode: String
}), 'Country');

module.exports = Country;