import { OrderHistory } from '../OrderHistory/OrderHistory';
import { OrderInfo } from '../OrderInfo/OrderInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import { Sidebar } from '../../Sidebar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

export function Account() {
    return(
        <div class="container row">
            <div class="col-auto">
                <Sidebar path={window.location.pathname == "/account" ? "/account/user-info" : window.location.pathname}/>
            </div>
            <div class="col">
                <Switch>
                    <Route path="/account/" exact component={UserInfo} />
                    <Route path="/account/user-info" exact component={UserInfo} />
                    <Route path="/account/order-history" exact component={OrderHistory} />
                    <Route path="/account/order-info/:id" exact component={OrderInfo} />
                </Switch>
            </div>
        </div>
    )
}