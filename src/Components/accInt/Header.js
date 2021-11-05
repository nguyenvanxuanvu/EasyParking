import { Link } from 'react-router-dom';
import Button from './Button'
import SearchBar from './SearchBar'


const Header = () => {


    return (
        <header className='topBar'>
            <div class='logo'>
                EasyParking
            </div>

            <div class='searchBarLoc'>
                <SearchBar />
            </div>

            <div className='loginBut'>
                <Link to='/login'>
                    <Button
                        type='submit'
                        text='Đăng nhập'
                        TColor='white'
                        BGColor='rgba(33, 25, 49, 1)'
                        className='btn' />
                </Link>
            </div>

            <div className='regisBut'>
                <Link to='/register'>
                    <Button
                        type='submit'
                        text='Đăng ký'
                        TColor='white'
                        BGColor='rgba(33, 25, 49, 1)'
                        className='btn addPad' />
                </Link>
            </div>

        </header>
    )
}

export default Header
