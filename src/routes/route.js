const express = require('express');
const router = express.Router();
const abc = require('../logger/logger.js')
const dfg = require('../util/helper')
const pqr = require('../validator/formatter')
const xyz = require('../lodash/lodash.js')

router.get('/test-me', function (req, res) {
    console.log(abc.welcome());
    console.log("today date is"+" "+ dfg.printDate);
    console.log("the current month is"+" "+dfg.printMonth);
    console.log(dfg.getBatchInfo());
    console.log(pqr.test);
    pqr.changeToLowerCase();
    pqr.changeToUpperCase();
    console.log(xyz.solution());

    res.send('My first ever api!')
});

module.exports = router;