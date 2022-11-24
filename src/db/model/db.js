let mongoose = require('mongoose')
let sch = new mongoose.Schema({
    ask: {
        type: Number,
        require: true
    }, bid: {
        type: Number,
        require: true
    },
    chg: {
        type: Number,
        require: true
    },
    pair: {
        type: String,
        require: true
    },
    volome: {
        type: Number,
        require: true
    },
    date: {
        type: String,
        require: true
    }
}, {
    timeseries: true, timestamps: true,
})

let db = mongoose.model('Data', sch)
module.exports = db