const obj1 = require('../logger/logger')
const obj2 = require('../util/helper')
const obj3 = require('../validator/formatter')
// const arr = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']
const express = require('express');
const router = express.Router();

router.get('/test-me1', function (req, res) {
    obj1.useWelcome()
    // console.log(obj4(chars))
    res.send('My first ever api!')
});

router.get('/test-me2', function (req, res) {
    console.log('Date : ' + obj2.usePrintDate)
    console.log('Month : ' + obj2.usePrintMonth)
    console.log(obj2.useBatchInfo)
    res.send('My second ever api!')
});

router.get('/test-me3', function (req, res) {
    console.log(obj3.useTrim)
    console.log(obj3.useNewStr)
    console.log(obj3.useNewStr2)
    res.send('My third ever api!')
});
module.exports = router;