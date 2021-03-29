const mysql = require("mysql")
const config = require('../config.json');
const SmartMeterLog = require('../models/smartmeterlog');

var Module = module.exports;
Module.addLog = addLog;

const DBconnect = mysql.createConnection(
    config.mysql
).connect(error => {
    if (error) throw error;
    console.log("Connected to MySQL!");
});

function addLog(topic, message) {
    const record = new new SmartMeterLog({
        topic: topic,
        smartmeterData: message.id,
        looptiming: message.looptiming
    });
}


function addToDB(data) {
    console.log(data);

    DBconnect.getConnection(function(error, connection) {
        if (error) throw error;
        connection.query('SELECT * from data_maarten_smartmeter', function (error, result) {
            if (error) {
                connection.release();
                return;
            }
            console.log('data inserted');
            connection.release();
        });
    })
}


    // record.save()
    // .then( ( data ) => {
    //     console.log('New data is saved!');

    // }).catch ( ( error) => {
    //     console.log('Error during saving the log: ' + error);
    // });
Module.addToDB = addToDB;