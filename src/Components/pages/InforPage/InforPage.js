import "./InforPage.css";
import { CostTable } from "./CostTable";
import { ListReview } from "./ListReview";
import { NavLink } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
const ARR_INFO = [
  [
    "Bãi đỗ hoa phượng",
    "1021 An Dương Vương (Bãi Sau Vũng Tàu)",
    "Nằm trong bán kính chỉ 5 phút đi bộ từ Bãi Sau ở thành phố Vũng Tàu, Star Hotel cung cấp Wi-Fi miễn phí và chỗ đỗ xe riêng miễn phí. \n\n Mỗi phòng nghỉ tại khách sạn này đều có máy điều hòa, kênh truyền hình cáp và phòng tắm riêng với vòi sen.\n\n  Khách sạn có bếp chung.\n\n Ở khu vực xung quanh có rất nhiều nhà hàng và quán ăn địa phương. Khách sạn cũng cung cấp dịch vụ cho thuê xe máy và xe hơi. Star Hotel cách Tượng Chúa Ki-tô Vũng Tàu 1,4 km và Ngọn hải đăng Vũng Tàu 1,4 km. Sân bay gần nhất là sân bay quốc tế Tân Sơn Nhất, cách đó 72 km.",
  ],
];
export function InforPage() {
  return (
    <div class="pt-3 ps-5 pe-5">
      <div class="row ">
        <div class="col-auto me-auto">
          <h3>{ARR_INFO[0][0]}</h3>
        </div>
        <div class="col-auto">
          <NavLink to="/reser" class="btn datngay">
            Đặt ngay
          </NavLink>
        </div>
      </div>
      <div class="row ">
        <div class="col-auto pt-2">
          <div class="font4">{ARR_INFO[0][1]}</div>
        </div>
        <div class="col">
          <div class="row ">
            <a class="nav-link" href="#">
              Xem trên bản đồ ->{" "}
            </a>
          </div>
        </div>
      </div>
      <div class="pt-4">
        <ImageSlider slides={SliderData} />
      </div>
      <div class="row pt-5">
        <h4>Giới thiệu</h4>
      </div>
      <div class="row pt-3">
        <div class="col-sm-7 ">
          <div class="font4">
            <div className="new-line">{ARR_INFO[0][2]}</div>
          </div>
        </div>
        <div class="col">
          <CostTable />
        </div>
      </div>
      <div class="col">
        <div class="Container">
          <ListReview />
        </div>
      </div>
    </div>
  );
}
