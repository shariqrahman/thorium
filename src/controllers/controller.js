const myOne = async function (req, res) {
    res.send({Output: "first api middleware"})
}

const myTwo = async function (res, res) {
    res.send({ Output: "second api middleware"})
}

module.exports.myOne = myOne
module.exports.myTwo = myTwo