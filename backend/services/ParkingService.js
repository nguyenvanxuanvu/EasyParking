const ParkingModel = require("../models/ParkingModel.js");

module.exports = {
  createParking: async (parking) => {
    const parkingModel = new ParkingModel(parking);
    const newParking= await parkingModel.save();
    return newParking;
  },

  getParking: async (parkingId) => {
    console.log(parkingId);
    const parking = await ParkingModel.findOne({_id: parkingId});
    console.log(parking);
    return parking;
  }
}