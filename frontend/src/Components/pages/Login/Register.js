import React from 'react'
import Button from "./Button"
import { Link } from 'react-router-dom';
import './accInt.css';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    var email = ""
    var displayName = ""
    var phone = ""
    var userName = null
    var pwd = null

    function register(e) {
        e.preventDefault();
        axios.post("http://localhost:8000/user/add-user", 
        {
            userName: userName,
            password: pwd,
            displayName: displayName,
            email: email,
            phone: phone
        })
        .then(res => {
            alert("Đăng ký thành công");
            window.location.href = "/login";
        })
        .catch(err => {
            alert(err);
        })
    }
    return (
        <div className='loginContainer'>
            <form>
                <div className='center'>
                    <p className='headerFont'>Đăng ký thành viên EasyParking</p>
                </div>

                <div className='inputBlock'>                                      
                        <label className='labelForm'><span className='star'>*</span>Địa chỉ Email</label>                           
                        <input required type='email' class="form-control" onChange={(event) => email = event.target.value}/>                  
                </div>
                <div className='inputBlock'>                    
                        <label className='labelForm'><span className='star'>*</span>Số điện thoại</label>                             
                        <input required type='tel' class="form-control" onChange={(event) => phone = event.target.value} />                  
                </div>
                <div className='inputBlock'>                   
                        <label className='labelForm'><span className='star'>*</span>Họ và tên</label>
                        <input required type='text' class="form-control" onChange={(event) => displayName = event.target.value}/>                    
                </div>
                <div className='inputBlock'>          
                        <label className='labelForm'><span className='star'>*</span>Tên đăng nhập</label>               
                        <input required type='text' class="form-control" onChange={(event) => userName = event.target.value}/>                
                </div>
                <div className='inputBlock'>                   
                        <label className='labelForm'><span className='star'>*</span>Mật khẩu</label>                                  
                        <input required type='password' class="form-control" onChange={(event) => pwd = event.target.value}/>               
                </div>

                <div className='center addMargin'>
                    <Button text='Đăng ký' type='submit' onClick={register} />
                </div>

            </form>

            <div className='center addMargin'>
                <p>Bạn đã có tài khoản EasyParking? <span><Link to='signIn' className='star'>Đăng nhập</Link> </span> </p>
            </div>

        </div>
    )
}

export default Register
