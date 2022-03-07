let validation = function (req, res, next) {
    const isFreeAppUserHeader = req.headers.isfreeappuser
    console.log(isFreeAppUserHeader)
    if(isFreeAppUserHeader !== undefined) {
        next();
    }
    else {
        res.send({msg : ' the request is missing a mandatory header'})
    }
}

module.exports.validation = validation;