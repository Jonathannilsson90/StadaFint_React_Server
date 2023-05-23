const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    customername:{
        type: String,
        required: true,
    },
    cleanername:{
        type: String,
        required: true,
    },
    time:{
        type: String,
        required: true,
    },
    level:{
        type: String,
        enum: ["BASIC","TOP","DIAMOND","WINDOWS"],
        required: true,
    },
    status:{
        type: Boolean,
        default: false,
        required: false,
    },
    date:{
        type: String,
        required: true,
    },

}, { versionKey : false} );

bookingSchema.index({ cleanername: 1, time: 1, date: 1 }, { unique: true });
module.exports = mongoose.model('Bookingmodel', bookingSchema)


