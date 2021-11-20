import "./InforPage.css";
import { CostTable } from "./CostTable";
import  ListReview  from "./ListReview";
import { NavLink } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import { useParams } from "react-router";
import InfoModal from './MapPopup';

export function InforPage({ Data }) {
  let { id } = useParams();

  var parking = [
    {
      _id: String,
      name: String,
      street: String,
      ward: String,
      district: String,
      province: String,
      long: Number,
      lat: Number,
      description: String,
      img: Array,
      price: Array,
      userName: String,
      feedback: Array,
    },
  ];
  var idx = 0;
  var d = 0;
  
  var img = [];
  var price = [];
  var feedback = [];
  for (let each of Data) {
    if (each._id === id) {
      parking = each;
      idx = d;
      img = each.img;
      price = each.price;
      feedback = each.feedback;
      
    }
    d = d + 1;
  }

  return (
    <div class="h-100">
      <div class="row h-100">
        <div class="pt-3 ps-5 pe-5">
          <div class="row ">
            <div class="col-auto me-auto">
              <h3>{parking.name}</h3>
            </div>
            <div class="col-auto">
            <NavLink to={"/checkout/" + id} class="btn datngay">
                Đặt ngay
              </NavLink>
            </div>
          </div>
          <div class="row ">
            <div class="col-auto pt-2">
              <div class="font4">
                {parking.street +
                  ", " +
                  parking.ward +
                  ", " +
                  parking.district +
                  ", " +
                  parking.province}
              </div>
            </div>
            <div class="col">
              <div class="row ">
                {/* <a class="nav-link" href="">
                  Xem trên bản đồ ->{" "}
                </a> */}
                <InfoModal name={parking.name} address={parking.street +', ' +parking.ward  +', ' +parking.district+', ' + parking.province}/>
              </div>
            </div>
          </div>
          <div class="pt-4">
            <ImageSlider slides={img} />
          </div>
          <div class="row pt-5">
            <h4>Giới thiệu</h4>
          </div>
          <div class="row pt-3">
            <div class="col-sm-7 ">
              <div class="font4">
                <div className="new-line">{parking.description}</div>
              </div>
            </div>
            <div class="col-4 ps-5">
              <CostTable param={price} />
            </div>
          </div>
          <div class="col">
            <div class="Container">
              <ListReview data={feedback} id={id}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
