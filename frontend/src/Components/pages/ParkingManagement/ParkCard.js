import { Component } from "react";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Button from "../../Button";
import './ParkCard.css'

class ParkCard extends Component {

    render() {
        return (
            <div className="col-6">
                <NavLink to={"/Info/" + this.props._id}>
                    <div class="park-card">
                        <span className="info">
                            <img class="img" src={this.props.img} alt={this.props.title} />

                            <div class="clearfix">
                                <h4 class="title">{this.props.title}</h4>
                                <p class="label order">{this.props.uncheckOrder} đơn hàng chưa hoàn tất</p>
                                <p class="label address">{this.props.address}</p>
                            </div>
                        </span>
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default ParkCard