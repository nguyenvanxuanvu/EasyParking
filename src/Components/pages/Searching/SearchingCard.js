import './SearchingCard.css';
import '../InforPage/InforPage'
const SearchingCard = (props) => {
  return (
    <div class="row">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title-search">{props.name}</h5>
          <div class="pt-2">
          <div class="col-0 col-md-2 parking-card-img">
          <img class="img-fluid" src={props.src}  alt = ""/>
          </div>
          </div>
          <div class="pt-3">
            <div class="row">
              <div class="col-auto">
                <button type="button" class="btn btn-secondary btn " disabled>
                  {props.star}
                </button>
              </div>
              <div class="col">
              <div class="pt-2">
                {props.numEvaluate} đánh giá
                </div>
              </div>
            </div>

            <div class="pt-3">
              <p class="card-text-addr">
              {props.address}
              </p>
            </div>
          </div>
          <p class="card-text-type">
          Loại phương tiện: {props.type}
          </p>
          <div class="pt-2">
            
            < div class="row">
            <div class="text-center">
            <a href="../InforPage/InforPage" class="btn btn-primary align-items-center">
              Đặt ngay
            </a>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchingCard;

    
