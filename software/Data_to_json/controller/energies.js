const e = require('express');
const express = require('express');
const router = express.Router();
const energy = require('../models/smartmeterlog')

//controllers 


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

// exports.setData = async (Temperature, Time, OnComplete) => {
//   return await energy.setData((err, data) => {
//     if(err) {
//       return OnComplete(err, null);
//     }else {
//       console.log('Set data');
//       return OnComplete(null, data);
//     }
//   });
// }




module.exports = energy;