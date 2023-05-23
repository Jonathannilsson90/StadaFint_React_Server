const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  isCustomer: {
    type:Boolean,
    required: true,
  },
  dbdate:{
    type: Date,
    default: Date.now
},
}, { versionKey : false} );

module.exports = mongoose.model("Usermodel", userSchema);
