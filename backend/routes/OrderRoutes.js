const express = require("express");
const mongoose = require('mongoose');
const OrderModel = require("../models/OrderModels.js");
const ParkingModel = require("../models/ParkingModel.js");
const UserModel = require("../models/UserModel.js");
const OrderService = require("../services/OrderService.js");

const router = express.Router();

router.post('/addOrder', async function (req, res) {
  console.log('POST add new order');
  const order = new OrderModel(req.body);

  try {
    await order.save();
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.get("/parking", async function (req, res) {
  console.log("GET parking");
  const parkings = await ParkingModel.find({});
  try {
    res.send(parkings);
  }
  catch (err) {
    res.status(500).send(err)
  }
})

router.post("/add-user", async function (req, res) {
  console.log('POST add new user');
  const user = new UserModel(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
})

router.get("/order-management/:userName", async function (req, res) {
  console.log('GET all order by user '+req.params.userName);
  try {
    const orders = await OrderService.getAllOrderBy(req.params.userName);
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
})

router.put("/change-state/:id", async function (req, res) {
  console.log('PUT data for '+req.params.id);
  try {
    const lastestOrder = await OrderService.updStatusOrderBy(mongoose.Types.ObjectId(req.params.id), req.body);
    res.status(200).send(lastestOrder);
  } catch (error) {
    res.status(500).send(error);
  }
})

module.exports = router;