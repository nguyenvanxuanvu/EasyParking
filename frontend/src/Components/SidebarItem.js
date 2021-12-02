import {AiOutlineHistory, AiFillCar} from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';
import {CgNotes} from 'react-icons/cg';
import React, { useState } from 'react';
import './Sidebar.css'
import {Link} from 'react-router-dom';

export const SidebarDatas = [
{
    title: "Thông tin cá nhân",
    icon: <BsFillPersonFill/>,
    link: "/account/user-info"
},
{
    title: "Lịch sử đặt bãi",
    icon: <AiOutlineHistory/>,
    link: "/account/order-history"
},
{
    title: "Quản lý đơn hàng",
    icon: <CgNotes/>,
    link: "/account/order-management"
},
{
    title: "Quản lý bãi đỗ",
    icon: <AiFillCar/>,
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