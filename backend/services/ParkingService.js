const ParkingModel = require("../models/ParkingModel.js");

module.exports = {
  createParking: async (parking) => {
    const parkingModel = new ParkingModel(parking);
    console.log(parkingModel);
    const newParking= await parkingModel.save();
    return newParking;
  },
  getAllParking: async () => {
    return await ParkingModel.find();
  },

  getAllParkingBy: async (username) => {
    let data = await ParkingModel.find({userName:username});
    return data;
  },

  getParking: async (parkingId) => {
    console.log(parkingId);
    const parking = await ParkingModel.findOne({_id: parkingId});
    console.log(parking);
    return parking;
  }
}