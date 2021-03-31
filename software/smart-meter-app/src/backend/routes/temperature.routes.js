const express = require('express');
const Temperature = require("../controllers/temperature.controller.js");
const router = express.Router();
const cors = require('cors');

router.get('/temp', cors(), async  (req, res) => {
  try {
    console.log('Try to find temperature');
    await Temperature.findAll((err, data) => {
      res.send(data);
    });
  } catch (error) {
    console.log(error);
    //Show the server is the problem
    res.status(500).send();
  }
});

module.exports = router;
