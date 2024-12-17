const user = require('../models/user')

exports.registeruser = (req, res) => {
    const user = new user(req.body)
    user.save()
    res.json()
}