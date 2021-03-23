
const config = require('../config.json');
var Module = module.exports;
Module.parseData = parseData;

var dict = [];



function parseData(data) {
    var JSONdata = {};
    var dataSnips = data.split("\r\n");

    fillDictionary();
    JSONdata["MeterName"] = dataSnips[0];

    dict.forEach(element => {
        for (let i = 0; i < dataSnips.length; i++) {
            if (element.value == dataSnips[i].substring(0, dataSnips[i].indexOf("("))) {
                JSONdata[element.key] = dataSnips[i].substring(dataSnips[i].lastIndexOf("(") + 1, dataSnips[i].lastIndexOf(")"));
            }
        }
    });

    return JSONdata;
}

function fillDictionary() {
    dict.push(
        {key: "Timestamp", value: "0-0:1.0.0"},
        {key: "OffPeakFlow", value: "1-0:1.8.1"},
        {key: "PeakFlow", value: "1-0:1.8.2"},
        {key: "OffPeakPowerFeed", value: "1-0:2.8.1"},
        {key: "PeakPowerFeed", value: "1-0:2.8.2"},
        {key: "CurrentRate", value: "0-0:96.14.0"},
        {key: "CurrentPower", value: "1-0:1.7.0"},
        {key: "ReturnedPower", value: "1-0:2.7.0"},
        {key: "GasUsage", value: "0-1:24.2.1"});
};