import { NavLink } from 'react-router-dom';
import './MiniCard.css';
const MiniCard = (props) => {
    return (
        <NavLink to="/Searching" class="text-decoration-none">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-secondary">{props.name}</h5>
                <p class="card-text text-secondary">{props.number}</p>
            </div>
        </div> 
        </NavLink>
    );
}
export default MiniCard;