const { now } = require("moment");
const moment = require("moment");

const myMiddleware = function (req, res, next) {
    // const dateTime = new Date().toISOString().replace(/T/,' ').replace(/\..+/, "");
    let now = new Date();
    dateTime = new moment(now).format('YYYY-MM-DD HH:mm:ss:a')
    console.log(dateTime + ', ' + req.ip + ', ' + req.url);
    console.log('                   ')
    next();
  }

  module.exports.myMiddleware = myMiddleware