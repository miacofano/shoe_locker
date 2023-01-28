const mongoose = require('mongoose');

const ShoeSchema = new mongoose.Schema({
    brand: {type : String},
    model: {type : String},
    type: {type : String},
    primaryColor: {type: String},
    secondaryColor: {type: String},
    mileage: {type: String}
}, {timestamps: true})

const Shoe = mongoose.model('Shoe', ShoeSchema);

module.exports = Shoe;