import logo from './logo.svg';
import './App.css';
import { SidebarDatas, SidebarItem } from './components/SidebarItem';
import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { UserInfo } from './components/pages/UserInfo/UserInfo';
import { TopBar } from './components/TopBar';
import { OrderHistory } from './components/pages/OrderHistory/OrderHistory';
import { OrderInfo } from './components/pages/OrderInfo/OrderInfo';
import { orderData } from './data';
import { Cart } from './components/pages/Cart/Cart';
import { Account } from './components/pages/Account/Account';
import { CartItemDetail } from './components/pages/CartItemDetail/CartItemDetail';


function App() {
    console.log("App" + window.location.pathname);
    return (
        <Router>
            <div class="h-100">
                <div class="row px-2 sticky-top">
                    <TopBar />
                </div>
                <div class="row h-100 p-3">
                    <Switch>
                        <Route exact path="/cart" component={Cart}/>
                        <Route exact path="/cart-item-detail" component={CartItemDetail}/>
                        <Route path="/account" component={Account}/>
                    </Switch>

                </div>
            </div>
        </Router>
    )
}

export default App;
