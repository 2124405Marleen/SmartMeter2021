const express = require('express');
const Energies = require("../controllers/energie.controller.js");
const router = express.Router();
const cors = require('cors');

router.get('/energies', cors(), async  (req, res) => {
  try {
    console.log('Try to find energies');
    await Energies.findAll((err, data) => {
      res.send(data);
    });
  } catch (error) {
    console.log(error);
    //Show the server is the problem
    res.status(500).send();
  }
});

module.exports = router;
