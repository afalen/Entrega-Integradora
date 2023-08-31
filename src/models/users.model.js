const mongoose = require('mongoose')

const userColletion = 'users'

const userSchema = new mongoose.Schema({
    nombre: {type: String, require: true, max: 100},
    email: {type: String, require: true, max: 50},
})

const userModel = mongoose.model(userColletion, userSchema)

module.exports = {userModel}