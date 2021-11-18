import './ManageOrderPage.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import { TabContent, numOfOrder } from './TabContent';

export function ManageOrderPage() {
    const [toggleState, setToggleState] = useState(0);
    const [orders, setListOrders] = useState();

    const toggleTab = (index) => {
        setToggleState(index);
    };

    let getOrders = () => {
        axios.get('/order/order-management/xvu').then((res) => {
            if (res.status === 200) {
                setListOrders(res.data);
            }
        }).catch(err => console.log(err));
    }

    useEffect(()=>{
        getOrders();
    }, []);
        
    return (
        <>
            <h2 class="pageTitle">Quản lý đơn đặt từ khách hàng</h2><br /><br /><br />
            <div className="tabs-container">
                <div className="bloc-tabs">
                    <div className={toggleState === 0 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(0)}>
                        <h6>Tất cả</h6>
                        <p>{numOfOrder(0, orders)} đơn hàng</p>
                    </div>
                    <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}>
                        <h6>Đang chờ xác nhận</h6>
                        <p>{numOfOrder(1, orders)} đơn hàng</p>
                    </div>
                    <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}>
                        <h6>Đang đợi gửi</h6>
                        <p>{numOfOrder(2, orders)} đơn hàng</p>
                    </div>
                    <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}>
                        <h6>Đang đỗ</h6>
                        <p>{numOfOrder(3, orders)} đơn hàng</p>
                    </div>
                    <div className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(4)}>
                        <h6>Hoàn tất</h6>
                        <p>{numOfOrder(4, orders)} đơn hàng</p>
                    </div>
                    <div className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(5)}>
                        <h6>Đã hủy</h6>
                        <p>{numOfOrder(5, orders)} đơn hàng</p>
                    </div>
                </div>

                <div className="content-tabs">
                    <div className={toggleState === 0 ? "content  active-content" : "content"}>
                        <h3>Tất cả</h3>
                        <hr />
                        <TabContent tabType={toggleState} orders={orders} getOrders={getOrders} />
                    </div>
                    <div className={toggleState === 1 ? "content  active-content" : "content"}>
                        <h3>Đang chờ xác nhận</h3>
                        <hr />
                        <TabContent tabType={toggleState} orders={orders} getOrders={getOrders}/>
                    </div>
                    <div className={toggleState === 2 ? "content  active-content" : "content"}>
                        <h3>Đang đợi gửi</h3>
                        <hr />
                        <TabContent tabType={toggleState} orders={orders} getOrders={getOrders}/>
                    </div>
                    <div className={toggleState === 3 ? "content  active-content" : "content"}>
                        <h3>Đang đỗ</h3>
                        <hr />
                        <TabContent tabType={toggleState} orders={orders} getOrders={getOrders}/>
                    </div>
                    <div className={toggleState === 4 ? "content  active-content" : "content"}>
                        <h3>Hoàn tất</h3>
                        <hr />
                        <TabContent tabType={toggleState} orders={orders} getOrders={getOrders}/>
                    </div>
                    <div className={toggleState === 5 ? "content  active-content" : "content"}>
                        <h3>Đã hủy</h3>
                        <hr />
                        <TabContent tabType={toggleState} orders={orders} getOrders={getOrders}/>
                    </div>
                </div>
            </div>
        </>
    );
}
