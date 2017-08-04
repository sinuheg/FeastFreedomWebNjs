var express = require('express');
var router = express.Router();
//var geoip = require('geoip-lite');
var iplocation = require('iplocation')

var restaurants = require('../models/restaurants');
//var Country = require('../models/Country');
var timezone = require('node-google-timezone');
const axios = require('axios');

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

router.get('/getuserlocation/:lat/:lng', (req, res) => {
    var lat = req.params.lat, lng = req.params.lng;
    if(lat && lng){
        axios.get(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=false`)
            .then(info => {
                var objresult = {};
                for(var i = 0; i < info.data.results.length; i++){
                    var result = info.data.results[i];
                    if(result.types.some(item => item == "locality")){
                        objresult.city = result.address_components[0].long_name;
                        objresult.region_name = result.address_components[2].long_name;
                        objresult.country_code = result.address_components[3].short_name;
                        break;
                    }
                    /*else if(result.types.some(item => item == "administrative_area_level_1")){
                        result.region_name = result.long_name;
                    }
                    else if(result.types.some(item => item == "country")){
                        result.country_code = result.short_name;
                    }*/
                }
                res.status(200).json(objresult);
            })
            .catch(error => {
                res.status(500).send(error)
            });
    }
    else{
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        if(ip == '::1' || ip == '::ffff:127.0.0.1'){
            const publicIp = require('public-ip');

            publicIp.v4().then(ip => {
                /*var geo = geoip.lookup(ip);
                console.log(geo);
                res.status(200).json(geo);*/

                iplocation(ip, function (error, resip) {
                    res.status(200).json(resip);
                });
            });
        }
        else{
            /*var geo = geoip.lookup(ip);
            console.log(geo);
            res.status(200).json(geo);*/

            iplocation(ip, function (error, resip) {
                res.status(200).json(resip);
            });
        }
    }

});
module.exports = router;