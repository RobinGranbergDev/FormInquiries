const mongoose = require('mongoose')

const inquirieTemplate = new mongoose.Schema({
    subCategory: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        date:  {
            type: Date,
            default: Date.now()
        }
    }
})

module.exports = mongoose.model('myTable', inquirieTemplate)