const ORDER_STATUS_LABEL = ["gửi", "xác nhận", "đỗ xe", "lấy xe", "hoàn tất"]
const ORDER_STATUS_PREFIX = {
    active: "Đã",
    inactive: "Đang chờ"
}
export const FEE_INTERVAL = 12;

export function calDuration(order) {
    let startTime = Date.parse(order.startTime);
    let endTime = Date.parse(order.endTime);
    return (endTime - startTime) / (60 * 60 * 1000);
}
export function getOrderTotalPrice(order) {
    return(order.vehicles.map((vehicle) => {
        return vehicle.unitPrice * vehicle.quantity * Math.ceil(calDuration(order) / FEE_INTERVAL);
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
