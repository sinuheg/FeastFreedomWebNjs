
use admin
db.createUser({"user" : "admin","pwd" : "1qaz2wsx",roles : [{"role" : "userAdminAnyDatabase","db" : "admin"}]});
mongo admin -u admin -p 1qaz2wsx



use feastfreedom
db.createUser({"user" : "FFUserNjs","pwd" : "FFUserNjs123",roles : [{"role" : "readWrite","db" : "feastfreedom"}]});

mongo feastfreedom -u FFUserNjs -p FFUserNjs123

db.countries.insert({
    "name" : "United States",
    "countrycode" : "US"
});