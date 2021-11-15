const express = require("express");

const ParkingService = require("../services/ParkingService.js");
const ParkingModel = require("../models/ParkingModel.js");
const router = express.Router();

const cors = require("cors")
router.use(cors())

router.post("/add-parking", async function (req, res) {
    console.log('POST add new parking');
    try {
        const parking = await ParkingService.createParking(req.body);
        res.status(201).send(parking);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.get("/parking-searching", async function (req, res) {
    console.log('GET all parking');
    try {
        const listParking = await ParkingService.getAllParking();
        res.status(200).send(listParking);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;