import { getOrderStatus, getOrderTotalPrice } from '../../../utils/OrderUtils';
import './OrderCard.css';
function getOrderVehicles(order) {
    let validVehicles = order.vehicles.filter(vehicle => vehicle.quantity > 0);
    return validVehicles.map(vehicle => vehicle.name).join(", ");
}
function countVehicles(order) {
    let quantityList = order.vehicles.map(vehicle => vehicle.quantity);
    return quantityList.reduce((pre, cur) => pre + cur);
}

export function OrderCard({order}) {
    return (
        <div class="container-fluid order-card m-0 my-3">
            <div class="row justify-content-center">
                <div class="col-0 col-md-2 order-card-img">
                    <img class="img-fluid" src="https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,g=0.5x0.5,f=auto/6a4b4c54f1d0b43c03955a1c95aea8a1.png"/>
                </div>
                <div class="col">
                    <div class="container">
                        <div class="column">
                            <h3>{order.parking.name}</h3>
                            <h5 class="text-danger">{getOrderStatus(order)}</h5>
                            <p class="mb-1">{order.parking.address}</p>
                            <p class="mb-1">Loại phương tiện: {getOrderVehicles(order)}</p>
                            <p class="mb-1">Số lượng: {countVehicles(order)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-end align-items-center">
                <h4 class="col-auto">Tổng tiền</h4>
                <h3 class="col-auto text-danger">{Intl.NumberFormat().format(getOrderTotalPrice(order))}đ</h3>
            </div>
            <div class="row justify-content-end align-items-center m-2">
                <button class="btn btn-primary col-3" onClick={()=> window.open("/account/order-info/" + order.id, "_blank")}>Xem chi tiết</button>
            </div>
        </div>
    )
}