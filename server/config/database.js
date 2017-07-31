module.exports = {
    //remoteUrl: 'mongodb://feastfreedomuser:feastfreedomuser123@ec2-34-203-188-157.compute-1.amazonaws.com/feastfreedom',
    remoteUrl: 'mongodb://FFUserNjs:FFUserNjs123@ec2-34-204-50-45.compute-1.amazonaws.com/feastfreedom',
    localUrl: 'mongodb://localhost/feastfreedom'
}
// module.exports = {
//     remoteUrl: 'mongodb://feastfreedomuser:feastfreedomuser123@ec2-34-203-188-157.compute-1.amazonaws.com/feastfreedom',
//     localUrl: 'mongodb://localhost/feastfreedom'
// }


//to connect from putty
//sudo mongo admin -u sinuhe -p 

//use admin 
//db.createUser({user: "feastfreedomuser", pwd: "feastfreedomuser123",roles: [ "root" ]})



//use feastfreedom
//db.createUser({user: "feastfreedomuser",pwd: "feastfreedomuser123",roles:[{"role" : "readWrite","db": "feastfreedom"}]})

//sudo mongo feastfreedom -u feastfreedomuser -p feastfreedomuser123