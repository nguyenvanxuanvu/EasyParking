import './CityCard.css';
const CityCard = (props) => {
    return (
        <div class="card mb-3 text-white border-0 shadow">
            <img class="card-img" src={props.img} alt="" height="399px"/>
            <div class="card-img-overlay">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.number}</p>
            </div>
        </div> 
    );
}
export default CityCard;
// 
// 