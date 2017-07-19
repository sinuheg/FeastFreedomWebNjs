module.exports = {
    remoteUrl: 'mongodb://feastfreedomapp:feastfreedomapp123@ec2-34-203-188-157.compute-1.amazonaws.com/feastfreedom',
    localUrl: 'mongodb://localhost/feastfreedom'
}



//to connect from putty
//sudo mongo admin -u sinuhe -p sinuhe

//db.createUser({user: "feastfreedomapp",pwd: "feastfreedomapp123",roles:[{"role" : "readWrite","db": "feastfreedom"}]})