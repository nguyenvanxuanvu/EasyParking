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
            parks: [],
            uncheck: []
        };
        this.USER_NAME = localStorage.getItem("userName");
    }

    componentWillMount() {
        axios.get('/parking/parking-management/' + this.USER_NAME).then((res) => {
            if (res.status == 200) {
                this.setState({ parks: res.data[0], uncheck: res.data[1] });
            }
        }).catch(err => console.log(err));
    }

    render() {
        let elements = () => {
            return this.state.parks.map((park, index) => {
                let res = '';
                res = <ParkCard _id={park?._id} title={park?.name}
                    img={park?.img[0]}
                    uncheckOrder={this.state.uncheck[index]}
                    address={park?.street + ', ' + park?.ward + ', ' + park?.district + ', ' + park?.province} />
                return res;
            });
        }

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
