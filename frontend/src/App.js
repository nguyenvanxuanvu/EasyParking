import logo from './logo.svg';
import './App.css';
import { SidebarDatas, SidebarItem } from './Components/SidebarItem';
import { useState, useEffect } from 'react';
import { Sidebar } from './Components/Sidebar';
import 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { UserInfo } from './Components/pages/UserInfo/UserInfo';
import  TopBar  from './Components/TopBar';
import { OrderHistory } from './Components/pages/OrderHistory/OrderHistory';
import { OrderInfo } from './Components/pages/OrderInfo/OrderInfo';
import { orderData } from './data';
import { Cart } from './Components/pages/Cart/Cart';
import { Account } from './Components/pages/Account/Account';
import { Checkout } from './Components/pages/Checkout/Checkout';
import { NewfeedPage } from './Components/pages/Newfeed/NewfeedPage';
import AllSearchingPage  from './Components/pages/Searching/AllSearchingPage'
import  AllInforPage  from './Components/pages/InforPage/AllInforPage';
import ScrollToTop from 'react-router-scroll-top'
import Login from './Components/pages/Login/Login';
import Register from './Components/pages/Login/Register';
import forgetPass from './Components/pages/Login/ForgetPass';
import ForgetPass from './Components/pages/Login/ForgetPass';
import Loading from './Components/pages/Loading/Loading';
import PaymentSuccess from './Components/pages/Payment/PaymentSuccess';
import PaymentFail from './Components/pages/Payment/PaymentFail';

function App() {
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        const USER_NAME = localStorage.getItem("userName");
        if(USER_NAME) {
            setAuth(true);
        }
    }, [])

    console.log("App" + window.location.pathname);
    return (
        <Router>
        <ScrollToTop>
            <div class="h-100">
                <div class="row px-2 fixed-top">
                    <TopBar auth={auth} setAuth={setAuth} />
                </div>
                <div class="pt-2">
                <div class="row h-100 pt-5">
                    <Switch>
                        <Route exact path="/loading" component={Loading}/>
                        <Route exact path="/" render={props => <NewfeedPage/>}/>
                        <Route exact path="/login" render={props => auth ? <NewfeedPage/> : <Login auth={auth} setAuth={setAuth}/>}/>
 
                        <Route exact path="/SignUp" render={props => auth ? <NewfeedPage/> : <Register/>}/>
                        <Route exact path="/forgetPass" component={ForgetPass}/>
                        <Route exact path="/Searching/:id" component={AllSearchingPage}/>
                        <Route exact path='/Info/:id' children={<AllInforPage />} />
                        <Route exact path="/Info" component={AllInforPage}/> 
                        <Route exact path="/cart" component={Cart}/>
                        <Route exact path="/checkout/:parkingId" render={props => auth ? <Checkout/> : <Login auth={auth} setAuth={setAuth}/>}/>
                        <Route path="/account" render={props => auth ? <Account setAuth={setAuth}/> : <Login auth={auth} setAuth={setAuth}/>}/>
                        <Route path="/payment/success" component={PaymentSuccess}/>
                        <Route path="/payment/fail" component={PaymentFail}/>
                    </Switch>
                </div>
            </div>
            </div>
            </ScrollToTop>
        </Router>
    )
}

export default App;
