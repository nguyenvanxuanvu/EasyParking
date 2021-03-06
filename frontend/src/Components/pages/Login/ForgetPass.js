import React from 'react'
import Button from './Button'
import './accInt.css'

const ForgetPass = () => {
    return (
        <div className='loginContainer'>
            <form>
                <div className='center star'>
                    <p className='headerFont'>Quên mật khẩu</p>
                </div>
                <div className='center addMargin'>
                    <p>Vui lòng nhập địa chỉ email được liên kết với tài khoản
                        EasyParking để nhận liên kết đặt lại mật khẩu</p>
                </div>
                <div className='inputBlock'>
                        <label className='labelForm'><span className='star'>*</span>Địa chỉ Email</label>
                        <input required type='email' />
                </div>
                <div className='center addMargin'>
                    <Button text='Gửi tới địa chỉ Email' type='submit' />
                </div>

            </form>
        </div>
    )
}

export default ForgetPass
