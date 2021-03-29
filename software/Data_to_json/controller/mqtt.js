const mqtt = require('mqtt');

const config = require('../config.json');
const db = require('./mysqldb');
const parser = require('../data/data-parser');
const { getInfo } = require('../models/smartmeterlog');

var Module = module.exports;

var mqttClient = mqtt.connect({ "host": config.mqtt.broker, "port": 1883});

mqttClient.on('connect', () => {
    console.log('Connected to MQTT!');

    mqttClient.subscribe(config.mqtt.topic_data, function (err) {
        if (err) {
            console.log("MQTT Error: " + err.message);
            //db.addLog(topic, message);
        }
    });
    mqttClient.subscribe(config.mqtt.topic_data_Xbee, function (err) {
        if (err) {
            console.log("MQTT Error XBEE: " + err.message);
        }
    });
});

mqttClient.on('message', function (topic, message) {
    message = JSON.parse(message);
    topic = topic.toString();
    if (topic == config.mqtt.topic_data && message.datagram.signature == config.mqtt.signature) {
            console.log(parser.parseData(message.datagram.p1));
            addToDB(parser.parseData(message.datagram.p1)); //TODO really add to db
    } else if (topic == config.mqtt.topic_data_Xbee) {
        console.log(message);
    }
    
});