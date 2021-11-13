const express = require("express");
const UserModel = require("../models/UserModel.js");
const UserService = require("../services/UserService.js");

const router = express.Router();

router.post("/add-user", async function (req, res) {
    console.log('POST add new user');
    try {
        const user = await UserService.createUser(req.body);
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/authenticate", async function (req, res) {
    console.log('GET authenticate user');
    try {
        const isValid = await UserService.authenticate(req.userName, req.password);
        if(isValid) {
            res.status(200).send();
        }
        else {
            res.status(401).send("Wrong username or password");
        }
    }
    catch(error) {
        res.status(500).send(error);
    }
});

module.exports = router;