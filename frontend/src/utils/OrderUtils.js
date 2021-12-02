const ORDER_STATUS_LABEL = ["gửi", "xác nhận", "đỗ xe", "hoàn tất", "hủy"]
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
        if(time) {
            seek = idx + 1;
    }});
    if(seek == ORDER_STATUS_LABEL.length) {
        return ORDER_STATUS_PREFIX.active + " " + ORDER_STATUS_LABEL[seek - 1];
    }
    else if(seek == ORDER_STATUS_LABEL.length - 1) 
        return ORDER_STATUS_PREFIX.active + " " + ORDER_STATUS_LABEL[seek - 1];
    else {
        return ORDER_STATUS_PREFIX.inactive + " " + ORDER_STATUS_LABEL[seek];
    }
}
export function isCompleted(order) {
    if(order.times[order.times.length - 2] || order.times[order.times.length - 1]) return true;
    else return false;
}
export function compareOrder(a, b) {
    // let aWeight = a.times.filter(element => element).length;
    // let bWeight = b.times.filter(element => element).length;
    a = JSON.parse(JSON.stringify(a));
    b = JSON.parse(JSON.stringify(b));
    let aWeight = a.times.reverse().findIndex(element => element);
    let bWeight = b.times.reverse().findIndex(element => element);
    // if(a.times[a.times.length - 1]) return 1;

    // if(b.times[b.times.length - 1]) return -1;

    // if(a.times[a.times.length - 2]) return 1;

    // if(b.times[b.times.length - 2]) return -1;

    if(aWeight < bWeight) return 1;

    if(aWeight > bWeight) return -1;

 
    return (new Date(a.times[0]) < new Date(b.times[0]) ? 1 : -1);
    
    
    return 0;
}

export function vehiclesToString(vehicles) {
    let validVehicles = vehicles.filter(vehicle => vehicle.quantity > 0);
    return validVehicles.map(vehicle => vehicle.name).join(", ");
}
export function countVehicles(vehicles) {
    let quantityList = vehicles.map(vehicle => vehicle.quantity);
    return quantityList.reduce((pre, cur) => pre + cur);
}

export function toPrettyDateTime(date) {
    return `${date.toLocaleTimeString()} ngày ${date.toLocaleDateString()}`;
}
