import { useState } from "react";
import { Link } from 'react-router-dom';
import Button from '../../Button';
import './TabContent.css';

// time: MM-DD-YYYY HH:mm:SS
export const ListOfOrder = [
    {
        idOrder: '000000001',
        parkName: 'Bãi đỗ Hoa Phượng',
        time: '11-11-2021 21:30:00',
        status: 'Đang chờ xác nhận',
        info: [
            {
                type: 'Xe máy',
                quantity: 2
            },
            {
                type: 'Xe 4-7 chỗ',
                quantity: 1
            }
        ],
        totalPrice: 25000
    },
    {
        idOrder: '000000023',
        parkName: 'Bãi đỗ Hoa Đào',
        time: '11-09-2021 11:00:00',
        status: 'Đã hủy',
        info: [
            {
                type: 'Xe máy',
                quantity: 1
            },
            {
                type: 'Xe 4-7 chỗ',
                quantity: 1
            }
        ],
        totalPrice: 20000
    },
    {
        idOrder: '000000137',
        parkName: 'Bãi đỗ Nhà Bè',
        time: '11-05-2021 09:30:00',
        status: 'Đang chờ xác nhận',
        info: [
            {
                type: 'Xe máy',
                quantity: 2
            },
            {
                type: 'Xe 4-7 chỗ',
                quantity: 3
            }
        ],
        totalPrice: 55000
    },
    {
        idOrder: '000000009',
        parkName: 'Bãi đỗ Hoa Phượng',
        time: '11-02-2021 10:30:00',
        status: 'Hoàn tất',
        info: [
            {
                type: 'Xe máy',
                quantity: 4
            }
        ],
        totalPrice: 20000
    },
    {
        idOrder: '000000111',
        parkName: 'Bãi đỗ Hoa Đào',
        time: '11-02-2021 21:30:00',
        status: 'Đang chờ xác nhận',
        info: [
            {
                type: 'Xe 4-7 chỗ',
                quantity: 1
            }
        ],
        totalPrice: 15000
    },
    {
        idOrder: '000000020',
        parkName: 'Bãi đỗ Hoa Đào',
        time: '10-29-2021 07:30:00',
        status: 'Hoàn tất',
        info: [
            {
                type: 'Xe máy',
                quantity: 2
            }
        ],
        totalPrice: 10000
    },
]

export const numOfOrder = (tabType) => {
    var res = 0;
    for (const order of ListOfOrder) {
        switch (tabType) {
            case 1:
                if (order.status === 'Đang chờ xác nhận') {
                    res++;
                }
                break;
            case 2:
                if (order.status === 'Đang đợi gửi') {
                    res++;
                }
            case 3:
                if (order.status === 'Đang đỗ') {
                    res++;
                }
                break;
            case 4:
                if (order.status === 'Hoàn tất') {
                    res++;
                }
                break;
            case 5:
                if (order.status === 'Đã hủy') {
                    res++;
                }
                break;
            case 0:
                res++;
                break;
        }
    };
    return res;
}

let checkTime = (time) => {
    var temp_t = new Date(time);
    var t = temp_t.getTime() - new Date().getTime();

    var days, hours;
    if (t <= 0) {
        t = -t;
        days = Math.floor(t / (1000 * 60 * 60 * 24));
        t -= days * (1000 * 60 * 60 * 24);

        hours = Math.floor(t / (1000 * 60 * 60));

        return "Trễ " + days + " ngày " + hours + " giờ, từ " + temp_t.getHours() + ":" + temp_t.getMinutes() + " "
            + temp_t.getDate() + "-" + temp_t.getMonth() + "-" + temp_t.getFullYear();
    }
    else {
        days = Math.floor(t / (1000 * 60 * 60 * 24));
        t -= days * (1000 * 60 * 60 * 24);

        hours = Math.floor(t / (1000 * 60 * 60));

        return "Còn " + days + " ngày " + hours + " giờ, từ " + temp_t.getHours() + ":" + temp_t.getMinutes() + " "
            + temp_t.getDate() + "-" + temp_t.getMonth() + "-" + temp_t.getFullYear();
    }
}

let classN = (time)=>{
    var t = new Date(time).getTime() - new Date().getTime();
    console.log(t);
    return (t >= 0) ? "time-left" : "time-late";
}

let renderRows = (tabType) => {
    let data = [];
    for (const order of ListOfOrder) {
        switch (tabType) {
            case 1:
                if (order.status === 'Đang chờ xác nhận') {
                    data.push(order);
                }
                break;
            case 2:
                if (order.status === 'Đang đợi gửi') {
                    data.push(order);
                }
            case 3:
                if (order.status === 'Đang đỗ') {
                    data.push(order);
                }
                break;
            case 4:
                if (order.status === 'Hoàn tất') {
                    data.push(order);
                }
                break;
            case 5:
                if (order.status === 'Đã hủy') {
                    data.push(order);
                }
                break;
            case 0:
                data.push(order);
                break;
        }
    };

    return data.map((order, index) => {
        return (
            <tr>
                <td><input class="form-check form-check-input" type="checkbox" /></td>
                <td><Link className="text-decoration-none" to='/account/order-management'>{order.idOrder}</Link></td>
                <td className="park-name">{order.parkName}</td>
                <td className={classN(order.time)}>
                    {checkTime(order.time)}
                </td>
                <td>{order.status}</td>
                <td>{order.info.map((tp, index) => { return (<p>{tp.type}: {tp.quantity}</p>); })}</td>
                <td className="total-money">{order.totalPrice} VNĐ</td>
            </tr>
        );
    });
}

export function TabContent(props) {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <label for="formGroupExampleInput" class="form-label">Hiển thị</label>
                <select class="form-select" aria-label="Default select example">
                    <option value='1'>5 hàng</option>
                    <option value='2'>10 hàng</option>
                    <option value='3'>20 hàng</option>
                </select>
                <label for="formGroupExampleInput" class="form-label">Lọc theo</label>
                <select class="form-select" aria-label="Default select example">
                    <option value='1'>Mã đơn hàng</option>
                    <option value='2'>Tên bãi đỗ</option>
                    <option value='3'>Hạn xác nhận</option>
                    <option value='4'>Trạng thái</option>
                    <option value='5'>Thông tin</option>
                    <option value='6'>Tổng tiền</option>
                </select>
                <input type="text" class="form-control order-search" id="formGroupExampleInput" placeholder="Tìm kiếm đơn hàng" />
            </div>
            <div style={{ display: 'flex', float: 'right' }}>
                <div className="btn-order"><Button bgcolor="#ffd53b" btnName="Xác nhận hàng loạt" /></div>
                <div className="btn-order"><Button bgcolor="#211931" btnName="Hủy hàng loạt" /></div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Chọn</th>
                        <th scope="col">Mã đơn hàng</th>
                        <th scope="col">Tên bãi đỗ</th>
                        <th scope="col">Hạn xác nhận</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Thông tin</th>
                        <th scope="col">Tổng tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows(props.tabType)}
                </tbody>
            </table>
        </>
    );
}