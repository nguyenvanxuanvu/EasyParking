import React from 'react'
import Button from './Button'
import './accInt.css'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PersPage = ({setAuth}) => {
    var history = useHistory();
    const [userInfo, setUserInfo] = useState(null);
    function logout() {
        localStorage.removeItem("userName");
        setAuth(false);
    }
    useEffect(() => {
        axios.get("/user/info/" + localStorage.getItem("userName"))
        .then((res) => setUserInfo(res.data))
    }, []) 

    return (
        <div className="BigContainer">
            <div className="profileContainer">
                <div class="profile-pic-div">
                    <img src="https://www.farmersalmanac.com/wp-content/uploads/2021/04/forget-me-not-flower-as309740666.jpeg" id="photo" />
                    <input type="file" id="file" />
                    <label for="file" id="uploadBtn">Chọn ảnh</label>
                </div>
                <div className="persCon">
                    <h1 className="persHeader">Thông tin cá nhân</h1>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Tên đăng nhập</label>
                        </div>
                        <div class="col-md-6">
                            <p>{userInfo ? userInfo.userName : ""}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Tên hiển thị</label>
                        </div>
                        <div class="col-md-6">
                            <p>{userInfo ? userInfo.displayName : ""}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Email</label>
                        </div>
                        <div class="col-md-6">
                            <p>{userInfo ? userInfo.email : ""}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Số điện thoại</label>
                        </div>
                        <div class="col-md-6">
                            <p>{userInfo ? userInfo.phone : ""}</p>
                        </div>
                    </div>

                    <Button className="btn btnMar" onClick={logout} text="Đăng xuất" />
                </div>
            </div>

        </div>
    )
}

export default PersPage
