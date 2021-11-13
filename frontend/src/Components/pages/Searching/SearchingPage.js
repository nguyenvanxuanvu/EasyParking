import './SearchingPage.css';
import SearchingCard from './SearchingCard';
import {SortBar} from './SortBar'

const PARKING_INFO_ARR = [
     ["Bãi đỗ hoa đào","https://cand.com.vn/Files/Image/anhkhoa/2019/07/06/thumb_660_b5b6e2e3-3166-45f0-a282-b642759089f3.jpg", 7.6, 11, "1021 An Dương Vương (bãi sau Vũng Tàu)","Xe máy , Ô tô 4-7 chỗ và Ô tô 16 chỗ" ],
     ["Bãi đỗ hoa phượng","https://cand.com.vn/Files/Image/anhkhoa/2019/07/06/thumb_660_b5b6e2e3-3166-45f0-a282-b642759089f3.jpg", 9.6, 110, "1021 An Dương Vương (bãi sau Vũng Tàu)","Xe máy , Ô tô 4-7 chỗ và Ô tô 16 chỗ" ],
     ["Bãi đỗ hoa mai","https://cand.com.vn/Files/Image/anhkhoa/2019/07/06/thumb_660_b5b6e2e3-3166-45f0-a282-b642759089f3.jpg", 7.6, 11, "1021 An Dương Vương (bãi sau Vũng Tàu)","Xe máy , Ô tô 4-7 chỗ và Ô tô 16 chỗ" ],
     ["Bãi đỗ hoa mai","https://cand.com.vn/Files/Image/anhkhoa/2019/07/06/thumb_660_b5b6e2e3-3166-45f0-a282-b642759089f3.jpg", 7.6, 11, "1021 An Dương Vương (bãi sau Vũng Tàu)","Xe máy , Ô tô 4-7 chỗ và Ô tô 16 chỗ" ]
];

export function SearchingPage() {
  return (
    <div class="pt-2">
      <div class="col pt-4">
        <h3 class="PlaceName">Vũng Tàu: Đã tìm thấy 3 bãi đỗ xe</h3>
        <div class="pt-1">
          <div class="table-responsive table-borderless">
            <thead>
              <tr>
                <th scope="col" class="align-middle pe-4">Sắp xếp theo:</th>
                <th scope="col"><SortBar/></th>
              </tr>
            </thead>
          </div>
        </div>
        <div class="pt-4">
          <div class="row">
            {PARKING_INFO_ARR.map((parking) => {
              return (
                <div class="col-sm-4 border-10">
                    <div class = "pt-3 pe-3">
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
  );
}