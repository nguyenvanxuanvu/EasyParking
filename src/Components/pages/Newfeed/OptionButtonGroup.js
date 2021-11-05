import './OptionButtonGroup.css';
import { Link } from 'react-router-dom';

export const Option = [
    [{name: "Khu vực", link: "/Newfeed/Region"}],
    [{name: "Thành phố", link: "/Newfeed/City"}],
    [{name: "Được yêu thích nhiều", link: "/Newfeed/Favorite"}],
    [{name: "Gần tôi", link: "/Newfeed/NearMe"}],
];

export function OptionButtonGroup(props){
    return(
        <div class="btn-toolbar justify-content-between pe-5" role="toolbar" aria-label="Toolbar with button groups">
            <div class="row'">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
                <label class="btn btn-primary shadow-none" for="btnradio1">Khu vực</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked/>
                <label class="btn btn-primary shadow-none" for="btnradio2">Thành phố</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" checked/>
                <label class="btn btn-primary shadow-none" for="btnradio3">Được yêu thích nhiều</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" checked/>
                <label class="btn btn-primary shadow-none" for="btnradio4">Gần tôi</label>
            </div>
            <div class="input-group" style={{width:'413px'}}>
                <input type="text" class="form-control" placeholder="Tìm kiếm địa điểm" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
            </div>
        </div>
    );
}