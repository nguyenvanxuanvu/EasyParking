const ParkingModel = require("../models/ParkingModel.js");

module.exports = {
  createParking: async (parking) => {
    const parkingModel = new ParkingModel(parking);
    const newParking= await parkingModel.save();
    return newParking;
  },
  getAllParking: async () => {
    return await ParkingModel.find();
  },

}