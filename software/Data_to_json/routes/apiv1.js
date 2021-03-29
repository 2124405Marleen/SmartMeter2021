const express = require('express');
const cors = require('cors');
const router = express.Router();

const energies = require('../controller/energies');
const { json } = require('body-parser');
const e = require('express');
const { energy } = require('../controller/energies');

//routes

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

router.post('/energies', async (req, res) => {
  try{
    let temperate;
    let time;
    await energy.setData(temperate, time, result => {
      console.log(result);
    });
    res.send();
  } catch (error) {
    console.log(error)
  }
}
);

module.exports = router;