import {AiOutlineHome} from 'react-icons/ai';
import React, { useState } from 'react';
import './Sidebar.css'
import {Link} from 'react-router-dom';

export const SidebarDatas = [
{
    title: "Thông tin cá nhân",
    icon: <AiOutlineHome/>,
    link: "/account/user-info"
},
{
    title: "Thông báo",
    icon: <AiOutlineHome/>,
    link: "/account/notification"
},
{
    title: "Lịch sử đặt bãi",
    icon: <AiOutlineHome/>,
    link: "/account/order-history"
},
{
    title: "Quản lý đơn hàng",
    icon: <AiOutlineHome/>,
    link: "/account/order-management"
},
{
    title: "Quản lý bãi đỗ",
    icon: <AiOutlineHome/>,
    link: "/account/parking-management"
}
]

export function SidebarItem(props) {
    return(
        <li class="sidebar-item mb-1 container px-2">
            <Link class="text-decoration-none" to={props.path}>
                <div className= {`row align-items-center py-2 rounded ${props.isActive ? "bg-info text-secondary": "text-white"}`} onClick={props.onClick}>
                    <div className="col-auto d-flex justify-content-center">
                        {props.icon}
                    </div>
                    <div className="col">
                        <h5 class="m-0">{props.title}</h5>
                    </div>
                </div>
            </Link>
        </li>
    )
}