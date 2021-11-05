import React from 'react'
import Button from "./Button"
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='loginContainer'>
            <form>
                <div className='center'>
                    <p className='headerFont'>Đăng ký thành viên EasyParking</p>
                </div>
                <div className='inputBlock'>
                    <div>
                        <label className='star'>*</label>
                        <label className='labelForm'>Địa chỉ Email</label>
                    </div>
                    <div>
                        <input required type='email' />
                    </div>
                </div>
                <div className='inputBlock'>
                    <div>
                        <label className='star'>*</label>
                        <label className='labelForm'>Số điện thoại</label>
                    </div>
                    <div>
                        <input required type='tel' />
                    </div>
                </div>
                <div className='inputBlock'>
                    <div>
                        <label className='star'>*</label>
                        <label className='labelForm'>Họ và tên</label>
                    </div>
                    <div>
                        <input required type='text' />
                    </div>
                </div>
                <div className='inputBlock'>
                    <div>
                        <label className='star'>*</label>
                        <label className='labelForm'>Mật khẩu</label>
                    </div>
                    <div>
                        <input required type='password' />
                    </div>
                </div>
                <div className='inputBlock'>
                    <div>
                        <label className='star'>*</label>
                        <label className='labelForm'>Xác nhận mật khẩu</label>
                    </div>
                    <div>
                        <input required type='password' />
                    </div>
                </div>

                <div className='checkbox addMargin'>
                    <input required type='checkbox' />
                    <div>
                        <p>Tôi đồng ý với
                            <span><a href='' className='star'>Bảo mật và Điều khoản hoạt động của
                                EasyParking.</a> </span>
                        </p>
                    </div>
                </div>

                <div className='center addMargin'>
                    <Button text='Đăng ký' type='submit' />
                </div>

            </form>

            <div className='center addMargin'>
                <p>Bạn đã có tài khoản EasyParking? <span><Link to='login' className='star'>Đăng nhập</Link> </span> </p>
            </div>

        </div>
    )
}

export default Register
