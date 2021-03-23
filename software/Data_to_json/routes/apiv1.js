const express = require('express');
const router = express.Router();

const test = require('../controller/test');
const auth = require('../controller/auth');
// const auth = require();
// const smartMeter = require();


router.post('/login', auth.getToken);
router.get('/test', auth.validateToken, test.test);
// router.post('/login', auth.getToken);
// router.get('/log', auth.validateToken, smartMeter.getLog );
// router.get('/state', auth.validateToken, wemos.getState);

// router.post('/event/:event', auth.validateToken, smartMeter.postEvent);

module.exports = router;