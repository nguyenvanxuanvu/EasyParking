const express = require('express');
const orderRouter = require('./routes/OrderRoutes');
const userRouter = require("./routes/UserRoutes");
const parkingRouter = require("./routes/ParkingRoutes");

const app = express()
const port = 8000

app.use(express.json());

var mongoose = require('mongoose');

var mongoDB = 'mongodb+srv://mhung:123@cluster0.7hgnc.mongodb.net/Easy_Parking';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use('/order', orderRouter);
app.use("/user", userRouter);
app.use("/parking", parkingRouter);

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

module.exports = app;