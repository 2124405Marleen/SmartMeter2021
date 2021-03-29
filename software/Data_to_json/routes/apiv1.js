const express = require('express');
const cors = require('cors');
const router = express.Router();

const energies = require('../controller/energies');

router.get('/energies', cors(), async  (req, res) => {
    try {
      console.log('Try to find energies');
      await energies.findAll((err, data) => {
        res.send(data);
      });
    } catch (error) {
      console.log(error);
      //Show the server is the problem
      res.status(500).send();
    }
  });

module.exports = router;