const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
   name: String,
   unitPrice: Number,
   quantity: {type: Number, default: 0}
});

const OrderSchema = new mongoose.Schema({
  times: {
    type: [Date],
    default: [Date.now(), null, null, null, null]
  },
  customer: {
    name: String,
    phone: String,
    email: String
  },
  note: String,
  startTime: Date,
  endTime: Date,
  vehicles: [VehicleSchema],
  parkingId: mongoose.Types.ObjectId
});

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;