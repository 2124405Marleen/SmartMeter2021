const mysql = require("mysql")
const config = require('../config.json');
const SmartMeterLog = require('../models/smartmeterlog');

var Module = module.exports;
Module.addLog = addLog;
// Module = DBconnect;

const DBconnect = mysql.createConnection(
    config.mysql
).connect(error => {
    console.error(`Unable to connect to MySQL: ${error}`);
    return;
});

function addLog(topic, message) {
    const record = new new SmartMeterLog({
        topic: topic,
        smartmeterData: message.id,
        looptiming: message.looptiming
    });

    // record.save()
    // .then( ( data ) => {
    //     console.log('New data is saved!');

    // }).catch ( ( error) => {
    //     console.log('Error during saving the log: ' + error);
    // });
}