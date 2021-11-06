import { Component } from "react";
import Button from "../../Button";
import ParkCard from "./ParkCard";
import './ParkingManagementPage.css'
import { Link } from 'react-router-dom';

let parks= [
    {
        name: 'Bãi đỗ Hoa Phượng',
        img: 'https://www.joneslanglasalle.com.vn/images/cities/jll-are-parking-lots-the-answer-to-the-housing-shortage-teaser.jpg',
        uncheckOrder: 10,
        address: '1021 An Dương Vương 1021 An Dương Vương 1021 An Dương Vương 1021 An Dương Vương 1021 An Dương Vương Vương 1021 An Dương Vương 1021 An Dương Vương '
    },
    {
        name: 'Bãi đỗ Hoa Đào',
        img: 'https://www.joneslanglasalle.com.vn/images/cities/jll-are-parking-lots-the-answer-to-the-housing-shortage-teaser.jpg',
        uncheckOrder: 10,
        address: '1021 An Dương Vương'
    },
    {
        name: 'Bãi đỗ Hoa Hồng',
        img: 'https://www.joneslanglasalle.com.vn/images/cities/jll-are-parking-lots-the-answer-to-the-housing-shortage-teaser.jpg',
        uncheckOrder: 10,
        address: '1021 An Dương Vương'
    },
    {
        name: 'Bãi đỗ Hoa Ly',
        img: 'https://www.joneslanglasalle.com.vn/images/cities/jll-are-parking-lots-the-answer-to-the-housing-shortage-teaser.jpg',
        uncheckOrder: 10,
        address: '1021 An Dương Vương'
    },
    {
        name: 'Bãi đỗ Hoa Ly',
        img: 'https://www.joneslanglasalle.com.vn/images/cities/jll-are-parking-lots-the-answer-to-the-housing-shortage-teaser.jpg',
        uncheckOrder: 10,
        address: '1021 An Dương Vương'
    },
    {
        name: 'Bãi đỗ Hoa Ly',
        img: 'https://www.joneslanglasalle.com.vn/images/cities/jll-are-parking-lots-the-answer-to-the-housing-shortage-teaser.jpg',
        uncheckOrder: 10,
        address: '1021 An Dương Vương'
    }
]

export const addParking=(name, img, addr)=>{
    parks.unshift({name:name, img:img, uncheckOrder:0, address:addr});
};

export class ParkingManagementPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        let elements = parks.map((park, index) => {
            let res = '';
            res =<ParkCard title={park.name} img={park.img} uncheckOrder={park.uncheckOrder} address={park.address} />
            return res;
        });

        return (
            <div>
                <span class="pageTitle">Quản lý các bãi đỗ của tôi</span>
                <Link to="/account/parking-management/create">
                    <div id="btnAddPark" class="clearfix">
                        <Button bgcolor="#211931" btnName="Thêm bãi đỗ xe" />
                    </div>
                </Link>
                <div>
                    <br/> <br/> <br/> <br/>
                    <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                        {elements}
                    </div>
                </div>
                
            </div>
        );
    }
}
