const mongoose = require('mongoose');
const date = require('date-and-time');
const now = new Date();
module.exports = mongoose.model('hospitaldetails', {
    name: {
        type: String,
        required: true
    },
    beds: {
        type: String,
        required: true
    },
    mobileno: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: date.format(now, 'YYYY/MM/DD HH:mm:ss')
    }

})