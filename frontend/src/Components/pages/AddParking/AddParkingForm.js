import React, { Component } from 'react'
import Button from '../../Button';
import {
    Link
} from 'react-router-dom';
import './AddParkingForm.css';
import { addParking } from '../ParkingManagement/ParkingManagementPage';

const listPos = [
    {
        city: 'TP.Hồ Chí Minh',
        listDistrict: [
            {
                district: 'TP.Thủ Đức',
                listWard: ['Linh Trung', 'Linh Tây']
            },
            {
                district: 'Quận Bình Thạnh',
                listWard: ['Phường 14', 'Phường 3']
            },
        ]
    },
    {
        city: 'Bình Dương',
        listDistrict: [
            {
                district: 'TP.Thủ Dầu Một',
                listWard: []
            },
            {
                district: 'TX.Dĩ An',
                listWard: []
            },
        ]
    }
];


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
            uplImg: [],
            txtSL_xemay: '',
            txtSL_4_7: '',
            txtSL_9_16: '',
            txtSL_con: '',
            txtPr_xemay: '',
            txtPr_4_7: '',
            txtPr_9_16: '',
            txtPr_con: ''
        };
    }

    city = listPos.map((city, index) => {
        var res = '';
        res = <option value={index}>{city.city}</option>
        return res;
    });

    renderDistrict = (city) => {
        if (city !== '') {
            var selCity = parseInt(city);
            return (
                listPos[selCity].listDistrict.map((district, index) => {
                    return <option value={index}>{district.district}</option>
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
            if(district!==''){
                var selDist = parseInt(district);
                return(
                    listPos[selCity].listDistrict[selDist].listWard.map((ward, index)=>{
                        return <option value={index}>{ward}</option>
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

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        
        console.log(target.value);
        this.setState({
            [name]: value
        });

        if(target.name==='cbCity'){
            this.ward = this.renderWard('');
            this.district = this.renderDistrict(target.value);
        }

        if(target.name==='cbDistrict'){
            this.ward = this.renderWard(target.value);
        }
    }

    validateForm = () => {
        var data = this.state;
        // if(data.txtName===''||data.txtAddr===''||data.txtDesc===''||
        //         data.cbCity===''||data.cbDistrict===''||data.cbWard===''){
        //     return false;
        // }

        if(data.txtSL_xemay){
            var sl = parseInt(data.txtSL_xemay);
            if(Number.isInteger(sl)){
                this.setState({txtSL_xemay: sl});
                if(data.txtPr_xemay && data.txtNightPr_xemay){
                    var day = parseInt(data.txtPr_xemay);
                    var night = parseInt(data.txtNightPr_xemay);
                    if(Number.isInteger(day) && Number.isInteger(night)){
                        this.setState({txtPr_xemay: day});
                        this.setState({txtNightPr_xemay: night});
                    }
                    else return false;
                }
                else return false;
            }
        }

        return true;
    }


    onHandleSubmit = (event) => {
        // console.log(this.state);
        // if(this.validateForm()){
        //     console.log(this.state);
        // }
        // else{
        //     alert("fail validate");
        // }
        addParking(this.state.txtName, 'https://mpng.subpng.com/20180806/cgb/kisspng-clip-art-scalable-vector-graphics-computer-icons-i-upload-svg-png-icon-free-download-234957-onli-5b67cc369e4242.9010695715335291426482.jpg', this.state.txtAddr);
    }

    render() {
        let upImgIcon = "https://mpng.subpng.com/20180806/cgb/kisspng-clip-art-scalable-vector-graphics-computer-icons-i-upload-svg-png-icon-free-download-234957-onli-5b67cc369e4242.9010695715335291426482.jpg";
        return (
            <div class="addParkForm">
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
                    <img src={upImgIcon} alt="Upload image" class="uploadImg" id="icon" />
                </div>
                <br />
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                    <h4 for="formGroupExampleInput" class="form-label"><span style={{ color: "red" }}>*</span> Thêm bảng giá</h4>
                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" id="colType">Loại xe</th>
                            <th scope="col" >Số lượng</th>
                            <th scope="col">Giá gửi 12h</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Xe máy</td>
                            <td><input type="text" class="input-table" name="txtSL_xemay" onChange={this.onHandleChange}/></td>
                            <td><input type="text" class="input-table" name="txtPr_xemay" onChange={this.onHandleChange}/> VNĐ</td>
                        </tr>
                        <tr>
                            <td>Xe 4-7 chỗ</td>
                            <td><input type="text" class="input-table" name="txtSL_4_7" onChange={this.onHandleChange}/></td>
                            <td><input type="text" class="input-table" name="txtPr_4_7" onChange={this.onHandleChange}/> VNĐ</td>
                        </tr>
                        <tr>
                            <td>Xe 9-16 chỗ</td>
                            <td><input type="text" class="input-table" name="txtSL_9_16" onChange={this.onHandleChange}/></td>
                            <td><input type="text" class="input-table" name="txtPr_9_16" onChange={this.onHandleChange}/> VNĐ</td>
                        </tr>
                        <tr>
                            <td>Xe container</td>
                            <td><input type="text" class="input-table" name="txtSL_con" onChange={this.onHandleChange}/></td>
                            <td><input type="text" class="input-table" name="txtPr_con" onChange={this.onHandleChange}/> VNĐ</td>
                        </tr>
                    </tbody>
                </table>
                <div class="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
                    <span id="btnAdd">
                        <Link to="/account/parking-management">
                            <Button onClick={this.onHandleSubmit} bgcolor="#ffd53b" btnName="Thêm bãi đỗ" class="btnAddPark"/>
                        </Link>
                        <Link to="/account/parking-management">
                            <Button bgcolor="#211931" btnName="Hủy" class="btnAddPark"/>
                        </Link>
                    </span>
                </div>


            </div>
        )
    }
}