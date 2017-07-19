var express = require('express');
var router = express.Router();

var restaurants = require('../models/restaurants');

router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/restaurants', (req, res) => {
    restaurants.find(function(err, data){
        if(err)
            res.status(500).send(err);

        res.status(200).json(data);
    });
});

module.exports = router;