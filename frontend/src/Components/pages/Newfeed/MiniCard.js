import { NavLink } from 'react-router-dom';
import './MiniCard.css';
import { removeVI, DefaultOption } from 'jsrmvi';
const MiniCard = (props) => {
    return (
        <NavLink to={"/Searching/"+removeVI(props.name)} class="text-decoration-none text-secondary ">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-secondary">{props.name}</h5>
                <p class="card-text text-secondary">Có {props.number} bãi đỗ xe</p>
            </div>
        </div> 
        </NavLink>
    );
}
export default MiniCard;