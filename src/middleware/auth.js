const { route } = require("../routes/route");
const jwt = require("jsonwebtoken");

let authenticate = function (req, res, next) {
  let token = req.headers["x-auth-token"]; 
  if (!token) return res.send({ status: false, msg: "token must be present" });
  next();
};

let authorise= function (req, res, next) {
  let token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token, "functionup-thorium");
  let userToBeModified = req.params.userId;
  let userLoggedIn = decodedToken.userId;
  if (userToBeModified != userLoggedIn)
    return res.send({
      status: false,
      msg: "User logged is not allowed to modify the requested users data",
    });

  next();
};

module.exports.authenticate= authenticate;
module.exports.authorise = authorise;
