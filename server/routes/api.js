var express = require('express');
var router = express.Router();

var restaurants = require('../models/restaurants');
//var Country = require('../models/Country');
//var timezone = require('../models/timezone');
var timezone = require('node-google-timezone');

router.get('/', (req, res) => {
    res.send('api works');
});



router.get('/timezone/:lat/:lng', (req, res) => {
     var now = new Date(); 
      var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
        var timestamp =now_utc/ 1000;
        var lat = req.params.lat,
          lng = req.params.lng;
          timezone.key('AIzaSyCTTudirKrHnzAUb_S1On43ao051hzkLOA'); // optional
          timezone.data(lat, lng, timestamp, function (err, tz) {
           if(err)
           res.status(500).send(err);
           var d = new Date(tz.local_timestamp * 1000);
           res.send(d.toDateString() + ' : ' + d.getHours() + ':' + d.getMinutes());
        });

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