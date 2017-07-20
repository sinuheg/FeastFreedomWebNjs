var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurants = mongoose.model('restaurant', new Schema({
    restaurantId: Number,
    name: String,
    rate: Number,
    review: String,
    productName: String,
    productTime: String,
    coverPhoto: Buffer,
    closed: Boolean
}));

var Country = mongoose.model('Country', new Schema({
    name: String,
    countrycode: String
}), 'Country');

module.exports.restaurants = restaurants;
module.exports.Country = Country;