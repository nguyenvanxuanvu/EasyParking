import CityCard from "./CityCard";
import UserGuide from "./UserGuide";
import OptionButtonGroup from "./OptionButtonGroup";
import SearchingCard from "../Searching/SearchingCard";
import { NavLink } from "react-router-dom";

const CITY_INFO_ARR = [
  [
    "https://media.vneconomy.vn/images/upload/2021/09/15/tphcm.jpg",
    "TP Hồ Chí Minh",
    "200 bãi đỗ xe",
  ],
  [
    "https://photo-cms-vovworld.zadn.vn/w500/Uploaded/vovworld/yzfsm/2019_09_23/vungtau_MWEG.jpg",
    "Vũng Tàu",
    "200 bãi đỗ xe",
  ],
  [
    "https://www.vietnambooking.com/wp-content/uploads/2020/12/kinh-nghiem-di-da-lat-thang-12-1.jpg",
    "Đà Lạt",
    "200 bãi đỗ xe",
  ],
  [
    "https://bigvn.blog/dp/wp-content/uploads/2018/07/ha-noi-co-bao-nhieu-quan8-1.jpg",
    "Hà Nội",
    "200 bãi đỗ xe",
  ],
];

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

const PARKING_INFO_ARR = [
  [
    "Bãi đỗ hoa đào",
    "https://cand.com.vn/Files/Image/anhkhoa/2019/07/06/thumb_660_b5b6e2e3-3166-45f0-a282-b642759089f3.jpg",
    7.6,
    11,
    "1021 An Dương Vương (bãi sau Vũng Tàu)",
    "Xe máy , Ô tô 4-7 chỗ và Ô tô 16 chỗ",
  ],
  [
    "Bãi đỗ hoa phượng",
    "https://cand.com.vn/Files/Image/anhkhoa/2019/07/06/thumb_660_b5b6e2e3-3166-45f0-a282-b642759089f3.jpg",
    9.6,
    110,
    "1021 An Dương Vương (bãi sau Vũng Tàu)",
    "Xe máy , Ô tô 4-7 chỗ và Ô tô 16 chỗ",
  ],
  [
    "Bãi đỗ hoa mai",
    "https://cand.com.vn/Files/Image/anhkhoa/2019/07/06/thumb_660_b5b6e2e3-3166-45f0-a282-b642759089f3.jpg",
    7.6,
    11,
    "1021 An Dương Vương (bãi sau Vũng Tàu)",
    "Xe máy , Ô tô 4-7 chỗ và Ô tô 16 chỗ",
  ],
  [
    "Bãi đỗ hoa mai",
    "https://cand.com.vn/Files/Image/anhkhoa/2019/07/06/thumb_660_b5b6e2e3-3166-45f0-a282-b642759089f3.jpg",
    7.6,
    11,
    "1021 An Dương Vương (bãi sau Vũng Tàu)",
    "Xe máy , Ô tô 4-7 chỗ và Ô tô 16 chỗ",
  ],
];

export function NewfeedPage() {
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
            <NavLink to="/SignIn" class="text-primary">Đăng nhập</NavLink> hoặc <NavLink to="/SignUp" class="text-primary">Đăng ký</NavLink> để trải nghiệm
          </h3>
          <h4 class="PlaceName pt-4">Địa điểm nổi bật</h4>
          <div class="pt-0">
            <div class="row pe-5">
              {CITY_INFO_ARR.map((city) => {
                return (
                  <div class="col-sm-3">
                    <div class="pt-3">
                      <CityCard
                        img={city[0]}
                        name={city[1]}
                        number={city[2]}
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
              <OptionButtonGroup></OptionButtonGroup>
            </div>
            <h4 class="PlaceName pt-4">Nổi bật</h4>
            <div class="pt-0">
              <div class="row pe-5">
                {PARKING_INFO_ARR.map((parking) => {
                  return (
                    <div class="col-sm-3">
                      <div class="pt-3 pe-3">
                        <SearchingCard
                          name={parking[0]}
                          src={parking[1]}
                          star={parking[2]}
                          numEvaluate={parking[3]}
                          address={parking[4]}
                          type={parking[5]}
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
