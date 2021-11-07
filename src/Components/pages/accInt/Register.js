import React from 'react'
import Button from "./Button"
import { Link } from 'react-router-dom';
import './accInt.css'

const Register = () => {
    return (
        <div className='loginContainer'>
            <form>
                <div className='center'>
                    <p className='headerFont'>Đăng ký thành viên EasyParking</p>
                </div>

                <div className='inputBlock'>                                      
                        <label className='labelForm'><span className='star'>*</span>Địa chỉ Email</label>                           
                        <input required type='email' />                  
                </div>
                <div className='inputBlock'>                    
                        <label className='labelForm'><span className='star'>*</span>Số điện thoại</label>                             
                        <input required type='tel' />                  
                </div>
                <div className='inputBlock'>                   
                        <label className='labelForm'><span className='star'>*</span>Họ và tên</label>
                        <input required type='text' />                    
                </div>
                <div className='inputBlock'>                   
                        <label className='labelForm'><span className='star'>*</span>Mật khẩu</label>                                  
                        <input required type='password' />               
                </div>
                <div className='inputBlock'>          
                        <label className='labelForm'><span className='star'>*</span>Xác nhận mật khẩu</label>               
                        <input required type='password' />                
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
