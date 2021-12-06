import React, { Component } from 'react';
import axios from 'axios';
import Button from '../../Button';
import {
    Link
} from 'react-router-dom';
import './AddParkingForm.css';
import { IoAddSharp } from 'react-icons/io5';
import { GrFormSubtract } from 'react-icons/gr';

const listPos = require('./locationData.json');


export default class AddParkingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: '',
            txtAddr: '',
            txtDesc: '',
            cbCity: '',
            cbDistrict: '',
            cbWard: '',
            uplImg: [''],
            txtPr_xemay: '',
            txtPr_4_7: '',
            txtPr_9_16: '',
            txtPr_32: ''
        };
        this.USER_NAME = localStorage.getItem("userName");
    }

    city = listPos.map((city, index) => {
        var res = '';
        res = <option value={index}>{city.Name}</option>
        return res;
    });

    renderDistrict = (city) => {
        if (city !== '') {
            var selCity = parseInt(city);
            return (
                listPos[selCity].Districts.map((district, index) => {
                    return <option value={index}>{district.Name}</option>
                })
            );
        }
        else {
            return '';
        }
    }

    renderWard = (district) => {
        if (this.state.cbCity !== '') {
            var selCity = parseInt(this.state.cbCity);
            if (district !== '') {
                var selDist = parseInt(district);
                return (
                    listPos[selCity].Districts[selDist].Wards.map((ward, index) => {
                        return <option value={index}>{ward.Name}</option>
                    })
                );
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
    }

    onChangeImg = (event, index) => {
        const values = [...this.state.uplImg];
        values[index] = event.target.value;
        this.setState({uplImg:values});
        console.log(this.state.uplImg);
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;

        this.setState({
            [name]: value
        });

        if (target.name === 'cbCity') {
            this.ward = this.renderWard('');
            this.district = this.renderDistrict(target.value);
        }

        if (target.name === 'cbDistrict') {
            this.ward = this.renderWard(target.value);
        }
    }

    validateForm = () => {
        var data = this.state;

        if (data.txtName === '' || data.txtAddr === '' || data.txtDesc === '' ||
            data.cbCity === '' || data.cbDistrict === '' || data.cbWard === '') {
            return false;
        }

        if (!data.uplImg) {
            this.setState({ uplImg: ["https://mpng.subpng.com/20180806/cgb/kisspng-clip-art-scalable-vector-graphics-computer-icons-i-upload-svg-png-icon-free-download-234957-onli-5b67cc369e4242.9010695715335291426482.jpg"] });
        }

        if (!data.txtPr_xemay && !data.txtPr_4_7 && !data.txtPr_9_16 && !data.txtPr_32)
            return false;

        return true;
    }

    onHandleSubmit = () => {
        console.log(this.state.uplImg);
        if (this.validateForm()) {
            console.log('successful');

            var postData = {
                "name": this.state.txtName,
                "street": this.state.txtAddr,
                "ward": listPos[this.state.cbCity].Districts[this.state.cbDistrict].Wards[this.state.cbWard].Name,
                "district": listPos[this.state.cbCity].Districts[this.state.cbDistrict].Name,
                "province": listPos[this.state.cbCity].Name,
                "description": this.state.txtDesc,
                "img": this.state.uplImg,// https://media-cdn.laodong.vn/storage/newsportal/2021/3/20/891104/Xe-Du-Tphcm-5.jpg?w=414&h=276&crop=auto&scale=both
                "price": [Number(this.state.txtPr_xemay), Number(this.state.txtPr_4_7), Number(this.state.txtPr_9_16), Number(this.state.txtPr_32)],
                "userName": this.USER_NAME
            };
            axios.post('/parking/add-parking', postData)
                .then(() => window.location.href = '/account/parking-management')
                .catch((err) => console.log(err));
        }
        else {
            alert('failure');
        }
    }

    render() {
        return (
            <div class="col-auto addParkForm">
                <h2>Thêm bãi đỗ</h2>
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                    <div class="col-6 mb-3">
                        <label for="formGroupExampleInput" class="form-label"><span style={{ color: "red" }}>*</span> Tên bãi đỗ</label>
                        <input name="txtName" onChange={this.onHandleChange} type="text" class="form-control" id="formGroupExampleInput" placeholder="Nhập từ 1 đến 50 ký tự" />
                    </div>
                    <div class="col-6 mb-3">
                        <label for="formGroupExampleInput" class="form-label"><span style={{ color: "red" }}>*</span> Địa chỉ</label>
                        <input name="txtAddr" onChange={this.onHandleChange} type="text" class="form-control" id="formGroupExampleInput" placeholder="Nhập số nhà, đường" />
                    </div>
                </div>
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                    <div class="col-4">
                        <label for="formGroupExampleInput" class="form-label"><span style={{ color: "red" }}>*</span> Thành phố/Tỉnh</label>
                        <select class="form-select" aria-label="Default select example"
                            name="cbCity"
                            onChange={this.onHandleChange}>
                            <option value=''>-- Thành phố/Tỉnh --</option>
                            {this.city}
                        </select>
                    </div>
                    <div class="col-4">
                        <label for="formGroupExampleInput" class="form-label"><span style={{ color: "red" }}>*</span> Quận/Huyện</label>
                        <select id="cbDist" class="form-select" aria-label="Default select example"
                            name="cbDistrict"
                            onChange={this.onHandleChange}>
                            <option value=''>-- Quận/Huyện --</option>
                            {this.district}
                        </select>
                    </div>
                    <div class="col-4">
                        <label for="formGroupExampleInput" class="form-label"><span style={{ color: "red" }}>*</span> Phường/Xã</label>
                        <select class="form-select" aria-label="Default select example"
                            name="cbWard"
                            onChange={this.onHandleChange}>
                            <option value=''>-- Phường/Xã --</option>
                            {this.ward}
                        </select>
                    </div>
                </div>
                <br />
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                    <label for="formGroupExampleInput" class="form-label"><span style={{ color: "red" }}>*</span> Mô tả chi tiết</label>
                    <div class="form-floating">
                        <textarea name="txtDesc" onChange={this.onHandleChange} class="form-control" id="floatingTextarea"></textarea>
                    </div>
                    <label for="formGroupExampleInput" id="hint">Mô tả từ 1-500 từ</label>
                </div>
                <br />
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                    <label for="formGroupExampleInput" class="form-label">Ảnh minh họa</label>
                    <br />
                    <ul class="list-group">
                        {this.state.uplImg.map((img, index) => {
                            return (
                                <li class="list-group-item">
                                    <div className="col-auto d-flex align-items-center">
                                        <input name="uplImg" value={img} onChange={e => this.onChangeImg(e,index)} type="text" class="form-control" id="formGroupExampleInput" />
                                        <button class="icon-btn" 
                                            onClick={() =>{
                                                if(this.state.uplImg.length===1) return;
                                                const values = [...this.state.uplImg];
                                                values.splice(index,1);
                                                this.setState({uplImg:values});
                                            }}>-</button>
                                        <button class="icon-btn"
                                            onClick={() => this.setState({uplImg:[...this.state.uplImg, '']})}>+</button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <br />
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                    <h4 for="formGroupExampleInput" class="form-label"><span style={{ color: "red" }}>*</span> Thêm bảng giá</h4>
                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" id="colType">Loại xe</th>
                            <th scope="col">Giá gửi 12h</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Xe máy</td>
                            <td><input type="text" class="input-table" name="txtPr_xemay" onChange={this.onHandleChange} /> VNĐ</td>
                        </tr>
                        <tr>
                            <td>Xe 4-7 chỗ</td>
                            <td><input type="text" class="input-table" name="txtPr_4_7" onChange={this.onHandleChange} /> VNĐ</td>
                        </tr>
                        <tr>
                            <td>Xe 9-16 chỗ</td>
                            <td><input type="text" class="input-table" name="txtPr_9_16" onChange={this.onHandleChange} /> VNĐ</td>
                        </tr>
                        <tr>
                            <td>Xe 32 chỗ</td>
                            <td><input type="text" class="input-table" name="txtPr_32" onChange={this.onHandleChange} /> VNĐ</td>
                        </tr>
                    </tbody>
                </table>
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                    <span id="btnAdd">
                        <Button onClick={this.onHandleSubmit} bgcolor="#ffd53b" btnName="Thêm bãi đỗ" class="btnAddPark" />
                        <Link to={'/account/parking-management'}><Button bgcolor="#211931" btnName="Hủy" class="btnAddPark" /></Link>
                    </span>
                </div>


            </div>
        )
    }
}
