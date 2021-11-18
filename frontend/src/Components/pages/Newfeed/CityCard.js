import { NavLink } from 'react-router-dom';
import { removeVI, DefaultOption } from 'jsrmvi';
const CityCard = (props) => {
    return (
        <NavLink to={"/Searching/"+removeVI(props.name)} class="text-decoration-none text-secondary ">
        <div class="card mb-3 text-white border-0 shadow">
            <img class="card-img" src={props.img} alt="" height="399px"/>
            <div class="card-img-overlay">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.number} bãi đỗ xe</p>
            </div>
        </div> 
        </NavLink>
    );
}
export default CityCard;