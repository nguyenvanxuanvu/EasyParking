const OrderModel = require("../models/OrderModels.js");
const ParkingModel = require("../models/ParkingModel.js")
const VEHICLE_NAMES = ["Xe máy", "Xe ô tô 4-7 chỗ", "Xe 16 chỗ", "Xe 32 chỗ"];
module.exports = {
    createOrder: async (body) => {
        var order = body;
        const parking = await ParkingModel.findOne({_id: order.parkingId});
        if(Object.keys(parking).length !== 0) {
            order.price = parking.price;
            const orderModel = new OrderModel(order);
            const newOrder = await orderModel.save();
            return newOrder;
        }
        else {
            return null;
        }

    },

    getOrder: async (orderId) => {
        var order = await OrderModel.findOne({_id: orderId});
        order = order.toObject();
        const parking = await ParkingModel.findOne({_id: order.parkingId});

        order.parking.name = parking.name;
        order.parking.address = [parking.street, parking.ward, parking.district, parking.province].join(", ");
        order.parking.image = parking.img[0];
        order.vehincles = VEHICLE_NAMES.map((item ,idx) => {
            var vehicle = {};
            vehicle.name = item;
            vehicle.unitPrice = order.price[idx];
            vehicle.quantity = order.quantity[idx];
            return vehicle;
        })
        console.log(order);
        delete order.parkingId;
        return order;
    }

}