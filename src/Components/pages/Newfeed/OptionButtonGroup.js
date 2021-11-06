import React, { useState } from 'react';
import { FindByCity } from './FindByCity';
import { NearMe } from './Nearme';
import './OptionButtonGroup.css';

const OptionButtonGroup = () => {
    const [active, setActive] = useState("");

    return (
        <div>
            <div class="btn-toolbar justify-content-between pe-5" role="toolbar" aria-label="Toolbar with button groups">
                <div class="row'">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked/>
                    <label onClick={()=>setActive("FirstCard")} class="btn option shadow-none" for="btnradio2">Thành phố</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" checked/>
                    <label onClick={()=>setActive("SecondCard")} class="btn option shadow-none" for="btnradio4">Gần tôi</label>
                </div>
                <div class="input-group" style={{width:'413px'}}>
                    <input type="text" class="form-control" placeholder="Tìm kiếm địa điểm" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
                </div>
            </div>
            <div>
                {active === "FirstCard" && <FindByCity/>}
                {active === "SecondCard" && <NearMe/>}
            </div>
        </div>
    )
}

export default OptionButtonGroup;