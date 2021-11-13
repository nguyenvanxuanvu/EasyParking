import logo from './logo.svg';
import './App.css';
import { SidebarDatas, SidebarItem } from './Components/SidebarItem';
import { useState } from 'react';
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
import { TopBar } from './Components/TopBar';
import { OrderHistory } from './Components/pages/OrderHistory/OrderHistory';
import { OrderInfo } from './Components/pages/OrderInfo/OrderInfo';
import { orderData } from './data';
import { Cart } from './Components/pages/Cart/Cart';
import { Account } from './Components/pages/Account/Account';
import { CartItemDetail } from './Components/pages/CartItemDetail/CartItemDetail';
import { NewfeedPage } from './Components/pages/Newfeed/NewfeedPage';
import AllSearchingPage from './Components/pages/Searching/AllSearchingPage'
import AllInfoPage from './Components/pages/InforPage/AllInfoPage';
import ScrollToTop from 'react-router-scroll-top'
import Login from './Components/pages/accInt/Login';
import Register from './Components/pages/accInt/Register';
import forgetPass from './Components/pages/accInt/ForgetPass';
import ForgetPass from './Components/pages/accInt/ForgetPass';

function App() {
    console.log("App" + window.location.pathname);
    return (
        <Router>
        <ScrollToTop>
            <div class="h-100">
                <div class="row px-2 sticky-top">
                    <TopBar />
                </div>
                <div class="row h-100 p-0">
                    <Switch>
                        <Route exact path="/" component={NewfeedPage}/>
                        <Route exact path="/SignIn" component={Login}/>
                        <Route exact path="/SignUp" component={Register}/>
                        <Route exact path="/forgetPass" component={ForgetPass}/>
                        <Route exact path="/Searching" component={AllSearchingPage}/>
                        <Route exact path="/Info" component={AllInfoPage}/>
                        <Route exact path="/cart" component={Cart}/>
                        <Route exact path="/cart-item-detail" component={CartItemDetail}/>
                        <Route path="/account" component={Account}/>
                    </Switch>
                </div>
            </div>
            </ScrollToTop>
        </Router>
    )
}

export default App;
