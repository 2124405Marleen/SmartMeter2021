const express = require('express');
const router = express.Router();

var Module = module.exports;
Module.test = test;


function test (req, res, next) {
    res.status(418).json({status: "Dit is een test!"});
}