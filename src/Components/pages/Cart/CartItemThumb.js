import { getOrderTotalPrice, countVehicles, vehiclesToString } from '../../../utils/OrderUtils';

export function CartItemThumb({cartItem}) {
    return(
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-0 col-md-2 order-card-img">
                    <img class="img-fluid" src="https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,g=0.5x0.5,f=auto/6a4b4c54f1d0b43c03955a1c95aea8a1.png"/>
                </div>
                <div class="col">
                    <div class="container">
                        <div class="column">
                            <h3>{cartItem.parking.name}</h3>
                            <p class="mb-1">{cartItem.parking.address}</p>
                            <p class="mb-1">Loại phương tiện: {vehiclesToString(cartItem.vehicles)}</p>
                            <p class="mb-1">Số lượng: {countVehicles(cartItem.vehicles)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-end align-items-center">
                <h4 class="col-auto">Tổng tiền</h4>
                <h3 class="col-auto text-danger">{Intl.NumberFormat().format(getOrderTotalPrice(cartItem.vehicles, cartItem.startTime, cartItem.endTime))}đ</h3>
            </div>
            <div class="row justify-content-end align-items-center m-2">
                <button class="btn btn-primary col-3" onClick={()=> window.open("/cart-item/" + cartItem.id, "_blank")}>Xem chi tiết</button>
            </div>
        </div>
    )
}