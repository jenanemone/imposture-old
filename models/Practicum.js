// The results of a parsed stream go here.

const mongoose = require('mongoose');

const PracticumSchema = new mongoose.Schema({
    fileTitle: {
        type: String,
        required: false,
        trim: true
    },
    fileRef: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'raw',
        enum: ['raw', 'analyzed']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    analysis: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Analysis',
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Practicum", PracticumSchema, "practica");