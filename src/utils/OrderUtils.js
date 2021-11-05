const ORDER_STATUS_LABEL = ["gửi", "xác nhận", "đỗ xe", "lấy xe", "hoàn tất"]
const ORDER_STATUS_PREFIX = {
    active: "Đã",
    inactive: "Đang chờ"
}
export const FEE_INTERVAL = 12;

export function calDuration(startTimeStr, endTimeStr) {
    let startTime = Date.parse(startTimeStr);
    let endTime = Date.parse(endTimeStr);
    return (endTime - startTime) / (60 * 60 * 1000);
}
export function getOrderTotalPrice(vehicles, startTimeStr, endTimeStr) {
    return(vehicles.map((vehicle) => {
        return vehicle.unitPrice * vehicle.quantity * Math.ceil(calDuration(startTimeStr, endTimeStr) / FEE_INTERVAL);
    }).reduce((previousValue, currentValue) => previousValue + currentValue));
}
export function getOrderStatus(order) {
    let seek = 0;

    order.times.map((time, idx) => {
        let status = "";
        let label= ORDER_STATUS_LABEL[idx];
        if(time != "") {
            seek = idx + 1;
    }});
    if(seek == ORDER_STATUS_LABEL.length) {
        return ORDER_STATUS_PREFIX.active + " " + ORDER_STATUS_LABEL[seek - 1];
    }
    else {
        return ORDER_STATUS_PREFIX.inactive + " " + ORDER_STATUS_LABEL[seek];
    }
}
export function isCompleted(order) {
    if(order.times[order.times.length - 1] != "") return true;
    else return false;
}
export function compareOrder(a, b) {
    let aWeight = a.times.filter(element => element != "").length;
    let bWeight = b.times.filter(element => element != "").length;
    if(aWeight > bWeight) return 1;
    else if(a < b) return -1;
    else return 0;
}

export function vehiclesToString(vehicles) {
    let validVehicles = vehicles.filter(vehicle => vehicle.quantity > 0);
    return validVehicles.map(vehicle => vehicle.name).join(", ");
}
export function countVehicles(vehicles) {
    let quantityList = vehicles.map(vehicle => vehicle.quantity);
    return quantityList.reduce((pre, cur) => pre + cur);
}
