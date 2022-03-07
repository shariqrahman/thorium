const userModel = require('../models/userModel')

const createUser = async function (req, res) {
    let user = req.body
    let userCreated = await userModel.create(user)
    res.send({ user: userCreated })
}
module.exports.createUser = createUser