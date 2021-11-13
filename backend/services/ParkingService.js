const ParkingModel = require("../models/ParkingModel.js");

module.exports = {
  createParking: async (parking) => {
    const parkingModel = new ParkingModel(parking);
    console.log(parkingModel);
    const newParking= await parkingModel.save();
    return newParking;
  },

  getAllParking: async (username) => {
    let data = await ParkingModel.find({userName:username});
    return data;
  },

}