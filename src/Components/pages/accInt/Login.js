import Button from "./Button"
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';
import './accInt.css'

const Login = () => {
    return (
        <div className='loginContainer'>
            <form>
                <div className='center'>
                    <p className='headerFont'>Đăng nhập</p>
                </div>
                <div className='inputBlock'>                    
                        <label className='labelForm'><span className='star'>*</span>Địa chỉ Email</label>               
                        <input required type='email' />             
                </div>
                <div className='inputBlock'>
                        <label className='labelForm'><span className='star'>*</span>Mật khẩu</label>
                        <input required type='password' />
                </div>
                <div className='center addMargin'>
                    <Button text='Đăng nhập' type='submit' />
                </div>

            </form>
            <div className='center addMargin'>
                <p>Quên mật khẩu? <span><Link to='/forgetPass' className='star'>Nhấn tại đây</Link> </span> </p>
            </div>
            <div className='center addMargin'>
                <p>Bạn chưa có tài khoản EasyParking? <span><Link to='/register' className='star'>Đăng ký</Link> </span> </p>
            </div>
            <div className='center addMargin'>
                <GoogleLogin buttonText="Đăng nhập với Google" />
            </div>
        </div>
    )
}

export default Login
