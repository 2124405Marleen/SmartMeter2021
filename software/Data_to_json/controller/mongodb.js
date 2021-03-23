const mongoose = require('mongoose');
const config = require('../config.json');
const SmartMeterLog = require('../models/smartmeterlog');

var Module = module.exports;
Module.addLog = addLog;

mongoose.connect(config.mongodb.host, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(db => {
    console.log("Connected to MongoDB!");
}).catch(error => {
    console.warn(`Unable to connect to MongoDB: ${error.toString()}`);
    throw error;
});

function addLog(topic, message) {
    const record = new new SmartMeterLog({
        topic: topic,
        smartmeterData: message.id,
        looptiming: message.looptiming
    });

    record.save()
    .then( ( data ) => {
        console.log('New data is saved!');

    }).catch ( ( error) => {
        console.log('Error during saving the log: ' + error);
    });
}