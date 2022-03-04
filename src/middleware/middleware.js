const myMiddleware = function (req, res, next) {
    const dateTime = new Date().toISOString().replace(/T/,' ').replace(/\..+/, "");
    console.log(dateTime + ', ' + req.ip + ', ' + req.url);
    console.log('                   ')
    next();
  }

  module.exports.myMiddleware = myMiddleware