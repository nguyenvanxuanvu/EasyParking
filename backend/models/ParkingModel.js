const mongoose = require("mongoose");

const ParkingSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    street: {
        type: String,
        required: true
    },

    ward: {
        type: String,
        required: true
    },

    district: {
        type: String,
        required: true
    },

    province: {
        type: String,
        required: true
    },

    long: {
        type: Number,
        default: 0
    },

    lat: {
        type: Number,
        default: 0
    },

    description: {
        type: String,
    },

    img: [String],
    
    price: {
        type: [Number],
        required: true
    }
});

const ParkingModel = mongoose.model("Parkings", ParkingSchema);

module.exports = ParkingModel;