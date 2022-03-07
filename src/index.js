const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ----------------------------------------------------------------------------- //
// MiddleWare

app.use(function (req, res, next) {
  // const dateTime = new Date().toISOString().replace(/T/,' ').replace(/\..+/, "");
  let now = new Date();
    dateTime = new moment(now).format('YYYY-MM-DD HH:mm:ss:a')
  console.log(dateTime +', ' + req.ip + ', ' + req.url);
  console.log('                      ')
  next();
});

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
