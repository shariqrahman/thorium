const jwt = require("jsonwebtoken");
const authenticate = function (req, res, next) {
    let token = req.headers["x-auth-token"];
    if (!token) return res.status(401).send({ status: false, msg: "token must be present" })
    let decodedToken = jwt.verify(token, "mySecret")
    if (!decodedToken) return res.status(401).send({ status: false, msg: "token is invalid" })
    next()
}




const authorise = function (req, res, next) {
    let token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, 'mySecret')
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
    if (userToBeModified != userLoggedIn) return res.status(403).send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
    next()
}

module.exports.authenticate = authenticate

module.exports.authorise = authorise