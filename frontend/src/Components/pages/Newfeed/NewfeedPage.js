import CityCard from "./CityCard";
import UserGuide from "./UserGuide";
import OptionButtonGroup from "./OptionButtonGroup";
import SearchingCard from "../Searching/SearchingCard";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const USER_GUIDE = [
  [
    "https://thumbs.dreamstime.com/b/connected-car-parking-sharing-service-remote-controlled-via-smartphone-app-vector-illustration-autonomous-wireless-hands-154583213.jpg",
    "Cách đặt chỗ gửi xe trên EasyParking",
  ],
  [
    "https://media.istockphoto.com/vectors/tiny-people-park-ar-in-parking-area-parking-lot-public-carpark-in-big-vector-id1331615197?b=1&k=20&m=1331615197&s=170667a&w=0&h=ESTSiNzlvpMQqP_WIAlmUTiSR_3kWJZbJYIN2PJIRGQ=",
    "Cách đăng tin bãi đỗ xe trên EasyParking",
  ],
  [
    "https://thumbs.dreamstime.com/b/connected-car-parking-sharing-service-remote-controlled-via-smartphone-app-vector-illustration-autonomous-wireless-hands-154583213.jpg",
    "Cổng thanh toán trực tuyến",
  ],
  [
    "https://thumbs.dreamstime.com/b/connected-car-parking-sharing-service-remote-controlled-via-smartphone-app-vector-illustration-autonomous-wireless-hands-154583213.jpg",
    "Những câu hỏi thường gặp",
  ],
];

const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
export function NewfeedPage() {
  const [theData, setProvince] = useState([]);
  
  

  function GetType(value){
    var a='';
    if(value.price[0]>0) a = a+" Xe máy, "
    if (value.price[1]>0) a= a+ "Xe 4-7 chỗ, "
    if (value.price[2]>0) a= a+ "Xe 9-16 chỗ, "
    if (value.price[3]>0 ) a=a+"Xe 32 chỗ, "
      a =a.slice(0, (-2));


    return a;
  }
  function getImg(value) {
    if (value === "TP.Hồ Chí Minh")
      return "https://media.vneconomy.vn/images/upload/2021/09/15/tphcm.jpg";
    else if (value === "Bà Rịa - Vũng Tàu")
      return "https://photo-cms-vovworld.zadn.vn/w500/Uploaded/vovworld/yzfsm/2019_09_23/vungtau_MWEG.jpg";
    else if (value === "Lâm Đồng")
      return "https://www.vietnambooking.com/wp-content/uploads/2020/12/kinh-nghiem-di-da-lat-thang-12-1.jpg";
    else if (value === "Đà lạt")
      return "https://bigvn.blog/dp/wp-content/uploads/2018/07/ha-noi-co-bao-nhieu-quan8-1.jpg";
      else if (value == "Khánh Hòa")
      return "https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/04_2019/khanh-hoa.jpg"
    
    
      else return "https://vn.blog.kkday.com/wp-content/uploads/blogcover-1.jpg"
  }
  function getNumCity(value) {
    let count = 0;
    for (let i in theData) {
      if (theData[i].province == value) {
        count = count + 1;
      }
    }
    return count;
  }

  useEffect(() => {
    axios
      .get("/parking/parking-searching")
      .then((res) => {
        if (res.status == 200) {
          setProvince(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  function uniq(a) {
    return a.sort().filter(function (item, pos, ary) {
      return !pos || item !== ary[pos - 1];
    });
  }

  var DataProvince = [];
  var DataParkingOustanding = [];
  for (let i in theData) {
    DataProvince.push(theData[i].province);
  }
  DataProvince = uniq(DataProvince);
  DataProvince = DataProvince.sort((a,b)=>getNumCity(b)-getNumCity(a))
  DataParkingOustanding = theData.sort((a,b) => average(b.feedback.map((each)=>{
    return each.rate;
  })) - average(a.feedback.map((each)=>{
    return each.rate;
  })) )
  var DataProvincefour = DataProvince.slice(0,4);
  var DataParkingOustandingfour = DataParkingOustanding.slice(0,4);
  return (
    <div>
      <div class="pt-5 ps-5">
        <div class="col pt-30">
          <h2 class="PlaceName text-center">
            Chào mừng đến với <span class="text-primary">EasyParking</span>
          </h2>
          <h3 class="PlaceName text-center">
            Đặt chỗ gửi xe nhanh chóng, tiện lợi, thanh toán dễ dàng
          </h3>
          <h3 class="PlaceName text-center">
            <NavLink to="/SignIn" class="text-primary">
              Đăng nhập
            </NavLink>{" "}
            hoặc{" "}
            <NavLink to="/SignUp" class="text-primary">
              Đăng ký
            </NavLink>{" "}
            để trải nghiệm
          </h3>
          <h4 class="PlaceName pt-4">Địa điểm nổi bật</h4>
          <div class="pt-0">
            <div class="row pe-5">
              {DataProvincefour.map((city) => {
                return (
                  <div class="col-sm-3">
                    <div class="pt-3">
                    
                      <CityCard
                        img={getImg(city)}
                        name={city}
                        number={getNumCity(city)}
                      ></CityCard>
                    
                    </div>
                  </div>
                );
              })}
            </div>
            <h4 class="PlaceName pt-4">Hướng dẫn sử dụng</h4>
            <div class="pt-0">
              <div class="row pe-5">
                {USER_GUIDE.map((guide) => {
                  return (
                    <div class="col-sm-3">
                      <div class="pt-3">
                        <UserGuide img={guide[0]} text={guide[1]}></UserGuide>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <h4 class="PlaceName pt-4">Tìm kiếm theo địa điểm</h4>
            <div class="pt-4">
              <OptionButtonGroup data={DataProvince}></OptionButtonGroup>
            </div>
            <h4 class="PlaceName pt-4">Nổi bật</h4>
            <div class="pt-0">
              <div class="row pe-5">
                {DataParkingOustandingfour.map((parking) => {
                  return (
                    <div class="col-sm-3">
                      <div class="pt-3 pe-3">
                        <SearchingCard
                          id = {parking._id}
                          name={parking.name}
                          src={parking.img[0]}
                          star={average(parking.feedback.map((each)=>{return each.rate}))}
                          numEvaluate={parking.feedback.length}
                          address={parking.street}
                          type={GetType(parking)}
                        ></SearchingCard>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
