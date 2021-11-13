const OrderModel = require('../models/OrderModels')
const ParkingService = require('./ParkingService');

module.exports = {
    getNumOfUncheckOrderBy: async (parkingId) => {
        return await OrderModel
            .count(
                {
                    parkingId: parkingId,
                    "times.0": {
                        $ne:null
                    },
                    "times.1": {
                        $eq:null
                    }
                });
    },

    getAllOrderBy: async function(userName){
        const parks = await ParkingService.getAllParking(userName);
        let orders = [];
        for(const park of parks){
            const orderOfPark = await OrderModel.find({parkingId:park?._id});
            orders.push(orderOfPark);
        }
        return [parks, orders];
    }
}