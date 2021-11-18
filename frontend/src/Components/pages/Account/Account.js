import { OrderHistory } from '../OrderHistory/OrderHistory';
import { OrderInfo } from '../OrderInfo/OrderInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import { ParkingManagementPage } from '../ParkingManagement/ParkingManagementPage';
import AddParkingForm from '../AddParking/AddParkingForm'
import { Sidebar } from '../../Sidebar';
import { ManageOrderPage } from '../ManageOrder/ManageOrderPage'
import PersPage from '../Login/PersPage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

export function Account({setAuth}) {
    return(
        <div class="container row">
            <div class="col-auto">
                <Sidebar path={window.location.pathname == "/account" ? "/account/user-info" : window.location.pathname}/>
            </div>
            <div class="col">
                <Switch>
                    <Route path="/account/" exact render={props => <PersPage setAuth={setAuth}/>} />
                    <Route exact path="/account/user-info" render={props => <PersPage setAuth={setAuth}/>} />
                    <Route path="/account/order-history" exact component={OrderHistory} />
                    <Route path="/account/order-info/:id" exact component={OrderInfo} />
                    <Route path="/account/parking-management" exact component={ParkingManagementPage} />
                    <Route path="/account/parking-management/create" exact component={AddParkingForm} />
                    <Route path="/account/order-management" exact component={ManageOrderPage} />
                    
                </Switch>
            </div>
        </div>
    )
}