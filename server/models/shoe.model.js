const mongoose = require('mongoose');

const ShoeSchema = new mongoose.Schema({
    brand: {
        type : String,
        required: [true, "Brand is required."]
    },
    model: {
        type : String,
        required: [true, "Model is required"]
    },
    type: {type : String},
    primaryColor: {type: String},
    secondaryColor: {type: String},
    mileage: {type: String}
}, {timestamps: true})

const Shoe = mongoose.model('Shoe', ShoeSchema);

module.exports = Shoe;