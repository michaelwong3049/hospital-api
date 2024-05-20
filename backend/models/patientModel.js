const mongoose = require('mongoose');

const patientModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bp: {
        type: Number,
        required: true
    },
    glucose: {
        type: Number,
        required: true
    },
    insulin: {
        type: Number,
        required: true
    },
    bmi: {
        type: Number,
        required: true
    }, 
}, {timestamps: true})
module.exports = mongoose.model("Patient", patientModel)