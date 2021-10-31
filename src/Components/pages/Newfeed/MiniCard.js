import './MiniCard.css';
const MiniCard = (props) => {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-secondary">{props.name}</h5>
                <p class="card-text">{props.number}</p>
            </div>
        </div> 
    );
}
export default MiniCard;