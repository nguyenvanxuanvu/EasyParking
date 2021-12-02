import { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';
import { removeVI, DefaultOption } from "jsrmvi";
import {calDuration,FEE_INTERVAL} from '../../../utils/OrderUtils';
import Button from '../../Button';
import './TabContent.css';

export const numOfOrder = (tabType, dataraw) => {
    var res = 0;
    dataraw?.map((ele) => {
        for (const order of ele[1]) {
            switch (tabType) {
                case 1:
                    if (order?.times[0] !== null && order?.times[1] == null && order?.times[4] == null) {
                        res++;
                    }
                    break;
                case 2:
                    if (order?.times[1] !== null && order?.times[2] == null && order?.times[4] == null) {
                        res++;
                    }
                    break;
                case 3:
                    if (order?.times[2] !== null && order?.times[3] == null && order?.times[4] == null) {
                        res++;
                    }
                    break;
                case 4:
                    if (order?.times[3] !== null && order?.times[4] == null) {
                        res++;
                    }
                    break;
                case 5:
                    if (order?.times[4] !== null) {
                        res++;
                    }
                    break;
                default:
                    res++;
                    break;
            }
        }
    });
    return res;
}

export function TabContent(props) {
    let tabType = props.tabType;
    let dataraw = props.orders;
    let getOrders = props.getOrders;
    let data = [];
    dataraw?.map((ele) => {
        for (const order of ele[1]) {
            switch (tabType) {
                case 1:
                    if (order?.times[0] !== null && order?.times[1] == null && order?.times[4] == null) {
                        data.push([ele[0], order]);
                    }
                    break;
                case 2:
                    if (order?.times[1] !== null && order?.times[2] == null && order?.times[4] == null) {
                        data.push([ele[0], order]);
                    }
                    break;
                case 3:
                    if (order?.times[2] !== null && order?.times[3] == null && order?.times[4] == null) {
                        data.push([ele[0], order]);
                    }
                    break;
                case 4:
                    if (order?.times[3] !== null && order?.times[4] == null) {
                        data.push([ele[0], order]);
                    }
                    break;
                case 5:
                    if (order?.times[4] !== null) {
                        data.push([ele[0], order]);
                    }
                    break;
                default:
                    data.push([ele[0], order]);
                    break;
            }
        }
    });

    const [orders, setOrders] = useState(data);
    const [checkedOrder, setCheckOrder] = useState([]);
    const [pageOption, setPageOption] = useState('5 hàng');
    const [filterOption, setFilterOption] = useState('Mã đơn hàng');
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => { setOrders(data) });

    // times[0]
    let checkNotAccept = (orderTime) => {
        var time = new Date(orderTime);
        time.setDate(time.getDate() + 1);
        var t = time.getTime() - new Date().getTime();
        var resT = t;
        var days, hours;
        var res;
        if (t <= 0) {
            t = -t;
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            t -= days * (1000 * 60 * 60 * 24);

            hours = Math.floor(t / (1000 * 60 * 60));

            res = "Trễ xác nhận " + days + " ngày " + hours + " giờ, từ " + time.getHours() + "h" + time.getMinutes() + " "
                + time.getDate() + "-" + (time.getMonth() + 1) + "-" + time.getFullYear();
        }
        else {
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            t -= days * (1000 * 60 * 60 * 24);

            hours = Math.floor(t / (1000 * 60 * 60));

            res = "Hạn xác nhận còn " + days + " ngày " + hours + " giờ, từ " + time.getHours() + "h" + time.getMinutes() + " "
                + time.getDate() + "-" + (time.getMonth() + 1) + "-" + time.getFullYear();
        }
        return [res, resT];
    }

    // startTime
    let checkWaiting = (startTime) => {
        var time = new Date(startTime);
        // time.setHours(time.getHours() - 7);
        var t = time.getTime() - new Date().getTime();
        var resT = t;
        var days, hours;
        var res;
        if (t <= 0) {
            t = -t;
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            t -= days * (1000 * 60 * 60 * 24);

            hours = Math.floor(t / (1000 * 60 * 60));

            res = "Đã trễ " + days + " ngày " + hours + " giờ, từ " + time.getHours() + "h" + time.getMinutes() + " "
                + time.getDate() + "-" + (time.getMonth() + 1) + "-" + time.getFullYear();
        }
        else {
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            t -= days * (1000 * 60 * 60 * 24);

            hours = Math.floor(t / (1000 * 60 * 60));

            res = "Thời gian đến lúc đỗ là " + days + " ngày " + hours + " giờ, từ " + time.getHours() + "h" + time.getMinutes() + " "
                + time.getDate() + "-" + (time.getMonth() + 1) + "-" + time.getFullYear();
        }
        return [res, resT];
    }

    // endTime
    let checkParking = (endTime) => {
        var time = new Date(endTime);
        // time.setHours(time.getHours() - 7);
        var t = time.getTime() - new Date().getTime();
        var resT = t;
        var days, hours;
        var res;
        if (t <= 0) {
            t = -t;
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            t -= days * (1000 * 60 * 60 * 24);

            hours = Math.floor(t / (1000 * 60 * 60));

            res = "Quá hạn lấy xe " + days + " ngày " + hours + " giờ, từ " + time.getHours() + "h" + time.getMinutes() + " "
                + time.getDate() + "-" + (time.getMonth() + 1) + "-" + time.getFullYear();
        }
        else {
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            t -= days * (1000 * 60 * 60 * 24);

            hours = Math.floor(t / (1000 * 60 * 60));

            res = "Thời gian đỗ còn " + days + " ngày " + hours + " giờ, đến " + time.getHours() + "h" + time.getMinutes() + " "
            + time.getDate() + "-" + (time.getMonth() + 1) + "-" + time.getFullYear();
        }
        return [res,resT];
    }

    // times[3]
    let checkDone = (doneTime) => {
        var time = new Date(doneTime);
        // time.setHours(time.getHours() - 7);
        return "Đã hoàn tất vào "+ time.getHours() + "h" + time.getMinutes() + " "
        + time.getDate() + "-" + (time.getMonth() + 1) + "-" + time.getFullYear();
    }

    // times[4]
    let checkCancel = (cancelTime) => {
        var time = new Date(cancelTime);
        // time.setHours(time.getHours() - 7);
        return "Đã hủy đơn vào "+ time.getHours() + "h" + time.getMinutes() + " "
        + time.getDate() + "-" + (time.getMonth() + 1) + "-" + time.getFullYear();
    }

    let checkTime = (order) => {
        switch (tabType) {
            case 1:
                return checkNotAccept(order?.times[0])[0];
            case 2:
                return checkWaiting(order?.startTime)[0];
            case 3:
                return checkParking(order?.endTime)[0];
            case 4:
                return checkDone(order?.times[3]);
            case 5:
                return checkCancel(order?.times[4]);
            default:
                if(order?.times[4] !== null){
                    return checkCancel(order?.times[4]);
                }
                else if(order?.times[3] !== null){
                    return checkDone(order?.times[3]);
                }
                else if(order?.times[2] !== null){
                    return checkParking(order?.endTime)[0];
                }
                else if(order?.times[1] !== null){
                    return checkWaiting(order?.startTime)[0];
                }
                else if(order?.times[0] !== null){
                    return checkNotAccept(order?.times[0])[0];
                }
        }
    }

    let classN = (order) => {
        var t;
        switch (tabType) {
            case 1:
                t = checkNotAccept(order?.times[0])[1];
                break;
            case 2:
                t = checkWaiting(order?.startTime)[1];
                break;
            case 3:
                t = checkParking(order?.endTime)[1];
                break;
            case 4:
                return "time-done";
            case 5:
                return "time-cancel";
            default:
                if(order?.times[4] !== null){
                    return "time-cancel";
                }
                else if(order?.times[3] !== null){
                    return "time-done";
                }
                else if(order?.times[2] !== null){
                    t = checkParking(order?.endTime)[1];
                }
                else if(order?.times[1] !== null){
                    t = checkWaiting(order?.startTime)[1];
                }
                else if(order?.times[0] !== null){
                    t = checkNotAccept(order?.times[0])[1];
                }
                break;
        }
        return (t >= 0) ? "time-left" : "time-late";
    }

    let displayInfo = (quantity, option) => {
        const type = ['Xe máy', 'Xe 4-7 chỗ', 'Xe 9-16 chỗ', 'Xe 32 chỗ'];
        return quantity?.map((ele, index) => {
            if (ele > 0) {
                if (option === 'html')
                    return (<p>{type[index]}: {ele}</p>);
                else if (option === 'text') return `${type[index]}: ${ele}`;
            }
            else return '';
        });
    }

    let totalPrice = (price, quan, time) => {
        var sum = 0;
        price?.map((ele, index) => {
            sum += ele * quan[index] * time;
        })
        return sum;
    }

    let handleCheckbox = (checked, order) => {
        if (checked) {
            setCheckOrder((prev) => [...prev, order]);
        }
        else {
            setCheckOrder(checkedOrder.filter(item => item !== order));
        }
    }

    let filterRow = (orders, filterOption, filterValue) => {
        if (filterValue === '')
            return orders;
        else {
            filterValue = removeVI(filterValue, { replaceSpecialCharacters: false })?.replace(/\s/g, '');
            let res = [];
            orders?.map((order) => {
                switch (filterOption) {
                    case 'Mã đơn hàng':
                        if (('#' + order[1]?._id?.replace(/\s/g, '').toLowerCase()).search(filterValue) >= 0) res.push(order);
                        break;
                    case 'Tên bãi đỗ':
                        var text = removeVI(order[0], { replaceSpecialCharacters: false });
                        if (text.replace(/\s/g, '').search(filterValue) >= 0) res.push(order);
                        break;
                    case 'Hạn xử lý':
                        var text = removeVI(checkTime(order[1]), { replaceSpecialCharacters: false });
                        if (text.replace(/\s/g, '').search(filterValue) >= 0) res.push(order);
                        break;
                    case 'Thông tin':
                        var t;
                        for (const i of displayInfo(order[1]?.quantity, 'text')) {
                            t += i;
                        }
                        var text = removeVI(t, { replaceSpecialCharacters: false });
                        if (text.replace(/\s/g, '').search(filterValue) >= 0) res.push(order);
                        break;
                    case 'Tổng tiền':
                        var text = removeVI(totalPrice(order[1]?.price, order[1]?.quantity, Math.ceil(calDuration(order[1]?.startTime, order[1]?.endTime) / FEE_INTERVAL)).toString(), { replaceSpecialCharacters: false });
                        if (text.replace(/\s/g, '').search(filterValue) >= 0) res.push(order);
                        break;
                }
            });
            return res;
        }
    }

    let RenderRows = function (orders, pageOption, filterOption, filterValue) {
        orders = filterRow(orders, filterOption, filterValue);
        return orders?.map((order, index) => {
            switch (pageOption) {
                case '5 hàng':
                    if (index >= 5) return '';
                case '10 hàng':
                    if (index >= 10) return '';
                case 'Tất cả':
                    return (
                        <tr>
                            <td><input name={tabType} class="form-check form-check-input" type="checkbox" onChange={(e) => handleCheckbox(e.target.checked, order[1])} /></td>
                            <td><Link className="text-decoration-none" to={'/account/order-info/' + order[1]?._id}>#{order[1]?._id}</Link></td>
                            <td className="park-name">{order[0]}</td>
                            <td className={classN(order[1])}>
                                {checkTime(order[1])}
                            </td>
                            <td>{displayInfo(order[1]?.quantity, 'html')}</td>
                            <td className="total-money">{totalPrice(order[1]?.price, order[1]?.quantity, Math.ceil(calDuration(order[1]?.startTime, order[1]?.endTime) / FEE_INTERVAL))} VNĐ</td>
                        </tr>
                    );
            }
        });
    }

    let clearCheckbox = () => {
        var x = document.getElementsByName(tabType);
        for (let e of x) {
            e.checked = false;
        }
        setCheckOrder([]);
    }

    let setNewStatus = (order) => {
        let res = order?.times;
        for (var i = 0; i < 4; i++) {
            if (!res[i]) {
                res[i] = new Date().toLocaleString();
                break;
            }
        }
        return res;
    }

    let accept = () => {
        let arr = JSON.parse(JSON.stringify(checkedOrder));
        for (let order of arr) {
            let newStt = setNewStatus(order);
            axios.put(`/order/change-state/${order?._id}`, newStt);
        }
        clearCheckbox();
        getOrders();
        console.log(checkedOrder);
    }

    let cancelOrder = (order) => {
        let res = order?.times;
        if(!res[4]){
            res[4] = new Date().toLocaleString();
            return res;
        }
        return '';
    }

    let cancel = () => {
        let arr = JSON.parse(JSON.stringify(checkedOrder));
        for (let order of arr) {
            let newStt = cancelOrder(order);
            if(newStt==='') continue;
            axios.put(`/order/change-state/${order?._id}`, newStt);
        }
        clearCheckbox();
        getOrders();
    }

    return (
        <>
            <div style={{ display: 'flex' }}>
                <label for="formGroupExampleInput" class="form-label">Hiển thị</label>
                <select class="form-select" aria-label="Default select example" onChange={(e) => setPageOption(e.target.value)}>
                    <option value="5 hàng">5 hàng</option>
                    <option value="10 hàng">10 hàng</option>
                    <option value="Tất cả">Tất cả</option>
                </select>
                <label for="formGroupExampleInput" class="form-label">Lọc theo</label>
                <select class="form-select" aria-label="Default select example" onChange={(e) => setFilterOption(e.target.value)}>
                    <option value='Mã đơn hàng'>Mã đơn hàng</option>
                    <option value='Tên bãi đỗ'>Tên bãi đỗ</option>
                    <option value='Hạn xử lý'>Hạn xử lý</option>
                    <option value='Thông tin'>Thông tin</option>
                    <option value='Tổng tiền'>Tổng tiền</option>
                </select>
                <input type="text" class="form-control order-search" id="formGroupExampleInput"
                    placeholder="Tìm kiếm đơn hàng" onChange={(e) => setFilterValue(e.target.value)} />
            </div>
            <div style={{ display: 'flex', float: 'right' }}>
                <div style={props.tabType >= 4 ? { display: "none" } : {}} className="btn-order" ><Button bgcolor="#ffd53b" btnName="Xử lý đơn hàng" onClick={accept} /></div>
                <div style={props.tabType == 5 ? { display: "none" } : {}} className="btn-order"><Button bgcolor="#211931" btnName="Hủy đơn hàng" onClick={cancel} /></div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Chọn</th>
                        <th scope="col">Mã đơn hàng</th>
                        <th scope="col">Tên bãi đỗ</th>
                        <th scope="col">Hạn xử lý</th>
                        <th scope="col">Thông tin</th>
                        <th scope="col">Tổng tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {RenderRows(orders, pageOption, filterOption, filterValue)}
                </tbody>
            </table>
        </>
    );
}