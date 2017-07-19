// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const database = require('./server/config/database');

const mongoose = require('mongoose');
mongoose.connect(database.remoteUrl);

//api
const api = require('./server/routes/api');

const app = express();

//parsers for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//static to dist (Angular 2 app)
app.use(express.static(path.join(__dirname,'dist')));

//set api routes
app.use('/api', api);

//send index.html file to all other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//set port
const port = process.env.PORT || 8081;
app.set('port', port);

//create http server

const server = http.createServer(app);

server.listen(port, () => console.log(`API running at on localhost: ${port}`));