const mongoose = require('mongoose')
const userDataSchema = mongoose.Schema({
    id: {
        type: String,
        required : true
    },
    userName: {
        type: String,
        required : true
    },
    accountNumber: {
        type: String,
        required : true
    }, 
    emailAddress: {
        type: String,
        required : true
    }, identityNumber: {
        type: String,
        required : true
    }
})

module.exports = mongoose.model('userData', userDataSchema)