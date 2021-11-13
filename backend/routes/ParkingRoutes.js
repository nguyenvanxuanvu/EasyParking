const express = require("express");
var mongoose = require('mongoose');
const ParkingService = require("../services/ParkingService.js");
const OrderService = require('../services/OrderService');

const router = express.Router();

router.post("/add-parking", async function (req, res) {
    console.log('POST add new parking');
    try {
        const parking = await ParkingService.createParking(req.body);
        res.status(201).send(parking);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/parking-management/:user", async function (req, res) {
    console.log('GET all parking');
    try {
        const listParking = await ParkingService.getAllParking(req.params.user);
        let uncheck =[]
        for(let ele of listParking){
          uncheck.push((await OrderService.getNumOfUncheckOrderBy(ele._id)).toString());
        }
        res.status(200).send([listParking,uncheck]);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;