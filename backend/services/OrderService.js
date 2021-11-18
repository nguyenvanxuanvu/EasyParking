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
        let parks = await ParkingService.getAllParkingBy(userName);
        let orders = [];
        for(let park of parks){
            let orderOfPark = await OrderModel.find({parkingId:park?._id});
            orders.push(orderOfPark);
        }

        let zip = parks.map((park, index)=>[park.name,orders[index]]);
        zip = zip.filter(item => item[1]?.length!==0);
        return zip;
    },

    updStatusOrderBy: async function (id, newStatus) {
        let doc = await OrderModel.findOneAndUpdate({_id:id}, {times:newStatus}, {new:true});
        return doc;
    }
}