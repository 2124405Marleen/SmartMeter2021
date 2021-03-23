const express = require('express');
const router = express.Router();

const config = require('../config.json');

var Module = module.exports;
Module.getToken = getToken;
Module.validateToken = validateToken;

function getToken(req, res) {
    const user = req.body.user;
    const password = req.body.password;

    console.log("getToken: " + user + ", " + password);

    if (user== "maarten" && password =="password") {
        res.status(200).json({token: "123456"});
    } else {
        res.status(401).json({status: "Wrong comination!"});
    }
}

function validateToken(req, res, next) {
    const token = req.query.token;

    if (token == 123456) {
        next();
    } else {
        res.status(401).json({status: "Not authorized!"});
    }
}