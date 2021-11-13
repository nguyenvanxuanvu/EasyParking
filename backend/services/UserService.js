const UserModel = require("../models/UserModel.js");

module.exports = {
  createUser: async (user) => {
    const userModel = new UserModel(user);
    const newUser = await userModel.save();
    return newUser;
  },

  authenticate: async (userName, password) => {
    const isValid = await UserModel.find({ $and: [{userName: userName}, {password: password}]});
    return isValid;
  }
}