const express = require('express');
const router = express.Router();
const energy = require('../models/smartmeterlog')

// var Module = module.exports;
// Module.test = test;


exports.findAll = async OnComplete => {
    return await energy.getAll((err, data) => {
      if (err) {
        return OnComplete(err, null);
      }else {
        console.log('Got data');
        return OnComplete(null, data);
      }
    });
  }