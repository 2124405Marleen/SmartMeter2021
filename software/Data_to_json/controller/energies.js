const express = require('express');
const router = express.Router();
const energy = require('../models/smartmeterlog')


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