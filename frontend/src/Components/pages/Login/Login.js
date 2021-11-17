import Button from "./Button"
import GoogleLogin from 'react-google-login';
import { Link, useHistory } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";


export default function Login() {
    var history = useHistory();
    var userName= "";
    var pwd = "";

    function submitLogin() {
        console.log(userName);
        console.log(pwd);
        axios.post("http://localhost:8000/user/authenticate", 
        {
            userName: userName,
            password: pwd
        })
        .then(res => {
            localStorage.setItem("userName", userName);
            history.push("/");
        })
        .catch(err => {
            alert("Incorrect");
        })
    }

    if(localStorage.getItem("userName")) {
        history.push("/");
    }
    
    return (
        <div className='loginContainer'>
            <form>
                <div className='center'>
                    <p className='headerFont'>Đăng nhập</p>
                </div>
                <div className='inputBlock'>                    
                        <label className='labelForm' ><span className='star'>*</span>Tên đăng nhập</label>               
                        <input  type='text' onChange={(event) => userName = event.target.value} />             
                </div>
                <div className='inputBlock'>
                        <label className='labelForm'><span className='star'>*</span>Mật khẩu</label>
                        <input   type='password'   onChange={(event) => pwd = event.target.value}/>
                </div>
            </form>
            <div className='center addMargin' onClick={submitLogin}>
                <Button text='Đăng nhập' />
            </div>
            <div className='center addMargin'>
                <p>Quên mật khẩu? <span><Link to='/forgetPass' className='star'>Nhấn tại đây</Link> </span> </p>
            </div>
            <div className='center addMargin'>
                <p>Bạn chưa có tài khoản EasyParking? <span><Link to='/signUp' className='star'>Đăng ký</Link> </span> </p>
            </div>
            <div className='center addMargin'>
                <GoogleLogin buttonText="Đăng nhập với Google" />
            </div>
        </div>
    )
}

