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


function App() {
    console.log("App" + window.location.pathname);
    return (
        <Router>
            <div class="h-100">
                <div class="row px-2">
                    <TopBar />
                </div>
                <div class="row h-100">
                    <div class="col-auto">
                        <Sidebar path={window.location.pathname == "/account" ? "/account/user-info" : window.location.pathname}/>
                    </div>
                    <div class="col">
                        <Switch>
                            <Route exact path="/account">
                                <Redirect to="/account/user-info" />
                            </Route>
                            <Route path="/account/user-info" exact component={UserInfo} />
                            <Route path="/account/order-history" exact component={OrderHistory} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App;
