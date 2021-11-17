import { OrderCard } from './OrderCard';
import { Link } from 'react-router-dom';
import {orderData} from '../../../data';
import { getOrderStatus, getOrderTotalPrice, isCompleted, compareOrder } from '../../../utils/OrderUtils';
import { padLeadingZeros } from '../../../utils/CommonUtils';
import axios from "axios";
import {useState, useEffect} from "react";
import { useHistory } from 'react-router';
import Login from '../Login/Login';
import Loading from '../Loading/Loading';

export function OrderHistory() {
    const [orderList, setOrderList] = useState(null);
    
    const USER_NAME = localStorage.getItem("userName");


    useEffect(() => {
        axios.get("/order/order-history/" + USER_NAME)
        .then(res => {
            setOrderList(res.data);
        })
        .catch(err => {
            console.log(err);
        })
       
    }, [])

    
    if(!orderList) {
        return(
            <Loading/>
        )
    }

    return(
        <div class="order-history-content container">
            <h3 class="my-3">Lịch sử đặt bãi</h3>
            <div class="order-card-list row">
                {orderList.map((order) => {
                    if(!isCompleted(order)) {
                        return <OrderCard order={order}/>
                    }
                    else {
                        return <></>
                    }
                })}
            </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Mã đơn hàng</th>
                    <th scope="col">Ngày đặt đơn</th>
                    <th scope="col">Tên bãi đỗ</th>
                    <th scope="col">Tổng tiền</th>
                    <th scope="col">Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {orderList.sort(compareOrder).map(order => {
                        return(
                            <tr>
                                <th scope="row"><Link to={"/account/order-info/" + order.id} target="_blank">#{order._id}</Link></th>
                                <td>{order.times[0]}</td>
                                <td>{order.parking.name}</td>
                                <td>{Intl.NumberFormat().format(getOrderTotalPrice(order.vehicles, order.startTime, order.endTime))}</td>
                                <td>{getOrderStatus(order)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        
    )
}