const express = require("express");
const OrderModel = require("../models/OrderModels.js");
const ParkingModel = require("../models/ParkingModel.js");
const UserModel = require("../models/UserModel.js");

const router = express.Router();

router.post('/addOrder', async function(req, res){
   console.log('POST add new order');
   const order = new OrderModel(req.body);

    try {
      await order.save();
      res.send(order);
    } catch (error) {
      res.status(500).send(error);
    }
});


router.get("/parking", async function(req, res){
  console.log("GET parking");
  const parkings = await ParkingModel.find({});
  try {
    res.send(parkings);
  }
  catch(err) {
    res.status(500).send(err)
  }
})

router.post("/add-user", async function(req, res) {
  console.log('POST add new user');
  const user = new UserModel(req.body);

   try {
     await user.save();
     res.send(user);
   } catch (error) {
     res.status(500).send(error);
   }
})

module.exports = router;