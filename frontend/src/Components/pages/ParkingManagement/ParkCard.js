import { Component } from "react";
import axios from 'axios';
import Button from "../../Button";
import './ParkCard.css'

class ParkCard extends Component {
    
    render() {
        return (
            <div className="col-6">
                <div class="card">
                    <span className="info">
                        <img class="img" src={this.props.img} alt={this.props.title} />

                        <div class="clearfix">
                            <span class="title">{this.props.title}</span><br />
                            <span class="label order">Đang có {this.props.uncheckOrder} đơn hàng chưa hoàn tất</span><br />
                            <span class="label address">{this.props.address}</span><br /><br />

                            <div class="btn"><Button bgcolor="#ffd53b" btnName="Xem chi tiết" /></div>
                        </div>
                    </span>
                </div>
            </div>
        );
    }
}

export default ParkCard