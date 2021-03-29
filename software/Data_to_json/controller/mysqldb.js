// const mysql = require("mysql")
// const config = require('../config.json');
const SmartMeterLog = require('../models/smartmeterlog');

const sql = require("../db.js");

var Module = module.exports;
Module.addLog = addLog;

// const DBconnect = mysql.createConnection(
//     config.mysql
// ).connect(error => {
//     if (error) throw error;
//     console.log("Connected to MySQL!");
// });

function addLog(topic, message) {
    const record = new new SmartMeterLog({
        topic: topic,
        smartmeterData: message.id,
        looptiming: message.looptiming
    });
}


function addXbeeToDB(data) {
    console.log('AM ID ADDING TO DB!?!?!');


    sql.query("INSERT INTO `data_maarten_zigbee` (`Temperature`, `Time`) VALUES (?,?)", [data.temperature, data.Time] , (err, res) => {

    });

}


function addSmartMeterToDB(data) {


    sql.query("INSERT INTO `data_maarten_smartmeter` " +
        "(`timeStamp`, " +
        "`offPeakFlow`, " +
        "`peakFlow`, " +
        "`offPeakPowerFeed`, " +
        "`peakPowerFeed`, " +
        "`currentRate`, " +
        "`currentPower`, " +
        "`returnedPower`, " +
        "`gasUsage`) " +
        "VALUES (?,?,?,?,?,?,?,?,?)", [
        data.Timestamp,
        data.OffPeakFlow,
        data.PeakFlow,
        data.OffPeakPowerFeed,
        data.PeakPowerFeed,
        data.CurrentRate,
        data.CurrentPower,
        data.ReturnedPower,
        data.GasUsage], (err, res) => {

    });


}
Module.addSmartMeterToDB = addSmartMeterToDB;
Module.addXbeeToDB = addXbeeToDB;
