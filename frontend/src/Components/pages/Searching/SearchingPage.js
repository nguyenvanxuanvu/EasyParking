import './SearchingPage.css';
import SearchingCard from './SearchingCard';
import {SortBar} from './SortBar'
import { SideBarSearch } from './SideBarSearch';
import { useParams } from 'react-router';
import { useState } from 'react';
export function SearchingPage({Data}) {
  
  let { id } = useParams();
  var numParking=0
  for (let i in Data){
      if (Data[i].province === id)
         numParking=numParking+1
  }
  
  const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;

  function GetType(value){
    var a='';
    if(value.price[0]>0) a = a+" Xe máy, "
    if (value.price[1]>0) a= a+ "Xe 4-7 chỗ, "
    if (value.price[2]>0) a= a+ "Xe 9-16 chỗ, "
    if (value.price[3]>0 ) a=a+"Xe 32 chỗ, "
      a =a.slice(0, (-2));


    return a;
  }
  return (
    <div class="row h-100">
      <div class="col-auto">
        {/* <SideBarSearch/> */}
        {/* //// */}
        <div className="sidebar bg-secondary p-4 h-100">
          <h5 class="card-title">Chọn lọc theo</h5>
          <h6 class="card-title pt-4">Loại xe</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              
              id="flexCheckDefault"
              check
            />
            <label class="form-check-label" for="flexCheckDefault">
              Xe máy
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              
              id="flexCheckChecked"
              check
            />
            <label class="form-check-label" for="flexCheckChecked">
              Xe 4 - 7 chỗ
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              
              id="flexCheckChecked"
              check
            />
            <label class="form-check-label" for="flexCheckChecked">
              Xe 9 - 16 chỗ
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              
              id="flexCheckChecked"
              check
            />
            <label class="form-check-label" for="flexCheckChecked">
              Xe 32 chỗ
            </label>
          </div>
         
        </div>
        );
        {/* ////// */}
      </div>
      <div class="col">
        <div class="pt-2">
          <div class="col pt-4">
            <h3 class="PlaceName">
              {id + ": Đã tìm thấy " + numParking + " bãi đỗ xe"}
            </h3>
            <div class="pt-1">
              <div class="table-responsive table-borderless">
                <thead>
                  <tr>
                    <th scope="col" class="align-middle pe-4">
                       Sắp xếp theo:
                      
                    </th>
                    <th scope="col">
                      <SortBar />
                    </th>
                  </tr>
                </thead>
              </div>
            </div>
            <div class="pt-4">
              <div class="row">
               {Data.map((parking) => {
                  if (parking.province === id)
                    return (
                      <div class="col-lg-4 d-flex align-items-stretch">
                        <div class="pt-3 pe-3">
                          <SearchingCard
                            class="searchcard"
                            id={parking._id}
                            name={parking.name}
                            src={parking.img[0]}
                            star={average(parking.feedback.map((each)=>{
                                   return each.rate;
                            }))}
                            numEvaluate={parking.feedback.length}
                            address={
                              parking.street +
                              ", " +
                              parking.ward +
                              ", " +
                              parking.district
                            }
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