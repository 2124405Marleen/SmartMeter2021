const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config.json');
const apiv1 = require('./routes/apiv1');
const mysqlDB = require('./controller/mysqldb');
const mqtt = require('./controller/mqtt');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({ type: 'application/json'}));


app.all('*', function(req, res, next) {
    console.log(`[${new Date().toISOString()}] [${req.method}] ${req.url} has been invoked!`)
});

app.get('/', express.static('public'));

app.use('/api/v1', apiv1);

const http = app.listen(config.http.port, function() {
    console.log("Server started...")
});