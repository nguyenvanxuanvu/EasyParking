import './SearchingCard.css';
import '../InforPage/InforPage'
import { NavLink } from 'react-router-dom';
const SearchingCard = (props) => {
  return (
    <NavLink to="/Info" class="text-decoration-none text-secondary ">
      <div class = "row-auto ps-1 pe-1">
      <div class="card widthcard border-0 shadow">
        <div class="card-body">
          <h5 class="card-title-search">{props.name}</h5>
          <div class="pt-2">
          <div class="col-0 col-md-2 parking-card-img">
          <img class="img-fluid" src={props.src}  alt = ""/>
          </div>
          </div>
          <div class="pt-1">
            <div class="row">
              <div class="col-auto">
                <button type="button" class="btn btn-light btn " disabled>
                  {props.star}
                </button>
              </div>
              <div class="col">
              <div class="pt-2 ">
                <div class="sizeincard">
                {props.numEvaluate} đánh giá
                </div>
                </div>
              </div>
            </div>

            <div class="pt-2">
              <p class="card-text-addr">
              <div class="sizeincard">
              {props.address}
              </div>
              </p>
            </div>
          </div>
          <p class="card-text-type ">
          Loại phương tiện: {props.type}
          </p>
          <div class="pt">
            
            <div class="row">
            <div class="text-center">
            <NavLink to="/reser" class="btn btn-light align-items-center">
              Đặt ngay
            </NavLink>
            </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </NavLink>
  );
}
export default SearchingCard;

    
