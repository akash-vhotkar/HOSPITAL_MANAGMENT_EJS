const mongoose = require('mongoose');
const date = require('date-and-time')
const now = new Date();
module.exports = mongoose.model('pationdetails', {
    name: {
        type: String,
        required: true
    },
    requirement: {
        type: String,
        required: true
    },
    mobileno: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    date: {
        type: String,
        default: date.format(now, 'YYYY/MM/DD HH:mm:ss')
    }

})