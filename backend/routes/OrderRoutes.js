const express = require("express");
const OrderModel = require("../models/OrderModels.js");
const ParkingModel = require("../models/ParkingModel.js");
const UserModel = require("../models/UserModel.js");
const OrderService = require("../services/OrderService.js");

const router = express.Router();

router.post('/add-order', async function(req, res){
   console.log('POST add new order');
    try {
      const order = await OrderService.createOrder(req.body);
      if(order) {
        res.send(order);
      }
      else {
        res.status(406).send(`Parking Id ${req.body.parkingId} not exist`);
      }
    } catch (error) {
      res.status(500).send(error);
    }
});

router.get("/:orderId", async function(req, res) {
  console.log("GET order from orderId");
  console.log(req.params.orderId);
  try {
    const order = await OrderService.getOrder(req.params.orderId);
    res.send("okk");
  }
  catch(error) {
    res.status(500).send(error);
  }

})

module.exports = router;