import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import { red, purple } from '@mui/material/colors';
import { useParams } from 'react-router';
import {orderData} from '../../../data';
import {calDuration, FEE_INTERVAL, getOrderTotalPrice, toPrettyDateTime } from '../../../utils/OrderUtils';
import { padLeadingZeros } from '../../../utils/CommonUtils';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';

const ORDER_STATUS_LABEL = ["gửi", "xác nhận", "đỗ xe", "lấy xe và hoàn tất", "hủy"]
const ORDER_STATUS_PREFIX = {
    active: "Đã",
    inactive: "Đang chờ"
}

function getOrderInfo(orderId) {
    return orderData.find(order => order.id == orderId)
}

function canCancel(times) {
    return (!times[2] && !times[3] && !times[4]);
}

export function OrderInfo() {
    const {id: ORDER_ID} = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        axios.get("/order/" + ORDER_ID)
        .then((res) => {
            console.log(res.data);
            setOrder(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);
    

    if(!order) {
        return(
            <Loading/>
        )
    }
    
    let activeStep = 0;

    let steps = order.times.map((time, idx) => {
        let prefix = "";
        let label= ORDER_STATUS_LABEL[idx];
        if(!time) {
            prefix = ORDER_STATUS_PREFIX.inactive;
        }
        else {
            prefix = ORDER_STATUS_PREFIX.active;
            const date = new Date(time);
            label = label.concat(" vào lúc ", toPrettyDateTime(date));
            activeStep = idx + 1;
            if(activeStep == ORDER_STATUS_LABEL.length) {
                activeStep--;
            }
        }
        return {
            label: prefix.concat(' ', label)
        }
    })

    if(order.times[3]) {
        activeStep = 3;
    }
    function cancel() {
        var newTime = JSON.parse(JSON.stringify(order.times));
        newTime[4] = new Date();
        axios.put("/order/change-state/" + ORDER_ID, newTime)
        .then(() => {
            alert("Cancel successfully");
            window.location.href = "/account/order-history";
        })
    }
    return(
        <div class="container">
            <h3 class="my-3">Thông tin đơn hàng #{order._id}</h3>
            <div class="row mx-auto">
                <div class="col">
                    <div class="row mx-auto">
                        <div class="col-12 bg-secondary text-white p-2">
                            <span>Thông tin khách hàng</span>
                        </div>
                    </div>
                    <div class="row mx-auto border py-2">
                        <div class="col-6">
                            <label>Tên khách hàng</label>
                            <input class="form-control" type="text" value={order.customer.name} aria-label="readonly input example" readonly/>
                        </div>
                        <div class="col-6">
                            <label>Số điện thoại</label>
                            <input class="form-control" type="text" value={order.customer.phone} aria-label="readonly input example" readonly/>
                        </div>
                        <div class="col-6">
                            <label>Email</label>
                            <input class="form-control" type="text" value={order.customer.email} aria-label="readonly input example" readonly/>
                        </div>
                        <div class="col-6">
                            <label>Phương thức thanh toán</label>
                            <input class="form-control" type="text" value={order.paymentMethod} aria-label="readonly input example" readonly/>
                        </div>
                        <div class="col-6">
                            <label>Gửi vào lúc</label>
                            <input class="form-control" type="text" value={toPrettyDateTime(new Date(order.startTime))} aria-label="readonly input example" readonly/>
                        </div>
                        <div class="col-6">
                            <label>Lấy vào lúc</label>
                            <input class="form-control" type="text" value={toPrettyDateTime(new Date(order.endTime))} aria-label="readonly input example" readonly/>
                        </div>
                    </div>
  
                </div>
            </div>
            <div class="row mx-auto mt-3">
                <h4>{order.parking.name}</h4>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Loại xe</th>
                        <th scope="col">Số giờ thuê</th>
                        <th scope="col">Đơn giá/12h</th>
                        <th scope="col">Số giờ thuê/12h</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>

                        {order.vehicles.map((vehicle, idx) => {
                            return(
                                <tr>
                                <th scope="row">{idx}</th>
                                <td>{vehicle.name}</td>
                                <td>{calDuration(order.startTime, order.endTime).toFixed(1)}h</td>
                                <td>{Intl.NumberFormat().format(vehicle.unitPrice)}đ</td>
                                <td>{Math.ceil(calDuration(order.startTime, order.endTime) / FEE_INTERVAL)}</td>
                                <td>{vehicle.quantity}</td>
                                <td>{Intl.NumberFormat().format(vehicle.unitPrice * vehicle.quantity * Math.ceil(calDuration(order.startTime, order.endTime) / FEE_INTERVAL))}đ</td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td colspan="6">Tổng tiền</td>
                            <td class="text-danger fw-bold fs-5">
                                {Intl.NumberFormat().format(getOrderTotalPrice(order.vehicles, order.startTime, order.endTime))}đ
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div class="row mx-auto">
                <h4>Trạng thái đơn hàng</h4>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel>
                            {step.label}
                        </StepLabel>
                    </Step>
                    ))}
                </Stepper>
            </div>
            {canCancel(order.times) ? 
                <div class="row mt-5">
                    <div class="col-auto">
                        <button class="btn btn-secondary" onClick={cancel}>Hủy đơn hàng</button>
                    </div>
                </div>
            : ""
            }
        </div>
    )
}