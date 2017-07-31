var express = require('express');
var router = express.Router();

var restaurants = require('../models/restaurants');
//var Country = require('../models/Country');

router.get('/', (req, res) => {
    res.send('api works');
});

// router.get('/restaurants', (req, res) => {
//     models.restaurants.find(function(err, data){
//         if(err)
//             res.status(500).send(err);

//         res.status(200).json(data);
//     });
    
// });

router.get('/restaurants/:recordLimit/:skipRecord', (req, res) => {
            restaurants.find(function(err, data){
                if(err)
                  res.status(500).send(err);
            res.status(200).json(data);
            }).skip(parseInt(req.params.skipRecord)).limit(parseInt(req.params.recordLimit));

});
module.exports = router;