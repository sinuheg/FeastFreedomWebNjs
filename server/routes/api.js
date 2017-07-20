var express = require('express');
var router = express.Router();

var models = require('../models/restaurants');
//var Country = require('../models/Country');

router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/restaurants', (req, res) => {
    models.restaurants.find(function(err, data){
        if(err)
            res.status(500).send(err);

        res.status(200).json(data);
    });
    
});

router.get('/Country', (req, res) => {
    models.Country.find(function(err, data){
        if(err)
            res.status(500).send(err);

        res.status(200).json(data);
    });
});

module.exports = router;