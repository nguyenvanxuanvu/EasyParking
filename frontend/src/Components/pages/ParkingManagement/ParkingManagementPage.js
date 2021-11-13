import { Component } from "react";
import axios from 'axios';
import Button from "../../Button";
import ParkCard from "./ParkCard";
import './ParkingManagementPage.css'
import { Link } from 'react-router-dom';

export class ParkingManagementPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            parks: []
        };
        axios.get('/parking/parking-management').then((res) => {
            if (res.status == 200) {
                this.setState({ parks: res.data });
            }
        }).catch(err => console.log(err));
    }

    render() {
        let elements = () => {
            console.log('hello');
            return this.state.parks.map((park, index) => {
                let res = '';
                res = <ParkCard title={park?.name} img={park?.img[0]} uncheckOrder={10} address={park?.street} />
                return res;
            });
        }
        console.log(this.state.parks);

        return (
            <div>
                <span class="pageTitle">Quản lý các bãi đỗ của tôi</span>
                <Link to="/account/parking-management/create">
                    <div id="btnAddPark" class="clearfix">
                        <Button bgcolor="#211931" btnName="Thêm bãi đỗ xe" />
                    </div>
                </Link>
                <div>
                    <br /> <br /> <br /> <br />
                    <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                        {elements()}
                    </div>
                </div>

            </div>
        );
    }
}
