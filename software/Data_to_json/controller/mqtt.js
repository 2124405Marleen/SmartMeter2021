const mqtt = require('mqtt');

const config = require('../config.json');
const db = require('./mysqldb');
const parser = require('../data/data-parser')

var Module = module.exports;

const mqttClient = mqtt.connect({"host": config.mqtt.broker, "username": config.mqtt.username, "password": config.mqtt.password});

mqttClient.on('connect', () => {
    console.log('Connected to MQTT!');

    mqttClient.subscribe(config.mqtt.topic_data, function (err) {
        if (err) {
            console.log("MQTT Error: " + err.message);
            //db.addLog(topic, message);
        }
    });
});

mqttClient.on('message', function (topic, message) {
    message = JSON.parse(message);
    topic = topic.toString();
    if (message.datagram.signature == config.mqtt.signature) {
        console.log(parser.parseData(message.datagram.p1));
        //console.log(message);
    }
    
});