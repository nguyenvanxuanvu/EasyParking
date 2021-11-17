import React from 'react'
import Button from './Button'
import './accInt.css'

const PersPage = () => {

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
                            <label>Tên hiển thị</label>
                        </div>
                        <div class="col-md-6">
                            <p>Nguyen Van A</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Email</label>
                        </div>
                        <div class="col-md-6">
                            <p>example@gmail.com</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Số điện thoại</label>
                        </div>
                        <div class="col-md-6">
                            <p>123456789</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label>Ngày sinh</label>
                        </div>
                        <div class="col-md-6">
                            <p>01/02/2000</p>
                        </div>
                    </div>

                    <Button className="btn btnMar" text="Chỉnh sửa thông tin" />
                </div>
            </div>

        </div>
    )
}

export default PersPage
