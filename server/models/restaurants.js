var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurants = mongoose.model('restaurants', new Schema({
    restaurantId: Number,
    name: String,
    rate: Number,
    review: String,
    productName: String,
    productTime: String,
    coverPhoto: Buffer,
    closed: Boolean
}));

module.exports = restaurants