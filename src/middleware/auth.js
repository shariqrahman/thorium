const jwt = require("jsonwebtoken")

let validation = function (req,res,next) {
    let xAuthToken = req.headers["x-auth-token"]
    if(xAuthToken) {
        next();
    }
    else{
        res.send({msg: "request is missing a mandatory header"})
    }
}
module.exports.validation = validation;