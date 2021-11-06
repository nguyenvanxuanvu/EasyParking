import React from 'react'
import Button from './Button'
import './accInt.css'

const PersPage = () => {

    return (
        <div className='persPageContainer'>

            <div className='profilePicShape' >
                <img id="photo" src='https://img.freepik.com/free-vector/floral-card_53876-91231.jpg?size=626&ext=jpg' />
                <input type="file" id="file" />
                <label for="file" id="uploadBtn">Chọn hình</label>
            </div>
            <div>
                <Button
                    type='submit'
                    text='Chỉnh sửa'
                    className='btn profileButt' />

                <h1 className='profileHeader'>Thông tin cá nhân</h1>
                <div class="row">
                    <div class="col-md-6">
                        <label>Tên hiển thị</label>
                    </div>
                    <div class="col-md-6">
                        <p>Olala</p>
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
                        <p>123 456 7890</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PersPage
