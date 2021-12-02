import { Link } from "react-router-dom";
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useEffect } from "react";
import { removeVI, DefaultOption } from 'jsrmvi';
export function TopBarSearch({ auth, setAuth, Data }) {
  function uniq(a) {
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item !== ary[pos - 1];
    });
}
  
  var DataProvince  =  []
  for (let i in Data){
    DataProvince.push(Data[i].province)
  }
  DataProvince =uniq(DataProvince)

  const [filteredData, setFilteredData] = useState([]);
  const [filteredDataProvince, setFilteredDataProvince] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilterProvince = DataProvince.filter((value) => {
          return ((value).toLowerCase().includes(searchWord.toLowerCase()))
    });
    const newFilter = Data.filter((value) => {
      return (
        (value.name +" " +value.ward +" " +value.district + " " +value.province).toLowerCase().includes(searchWord.toLowerCase()) ||
        (value.name + " " + value.province).toLowerCase().includes(searchWord.toLowerCase()) ||
        (value.name + " " + value.ward).toLowerCase().includes(searchWord.toLowerCase()) ||
        (value.name + " " + value.district).toLowerCase().includes(searchWord.toLowerCase()) ||
        (removeVI(value.name) +" " +removeVI(value.ward) +" " +removeVI(value.district) + " " +removeVI(value.province)).toLowerCase().includes(removeVI(searchWord.toLowerCase())) ||
        (removeVI(value.name) + " " + removeVI(value.province)).toLowerCase().includes(removeVI(searchWord.toLowerCase())) ||
        (removeVI(value.name) + " " + removeVI(value.ward)).toLowerCase().includes(removeVI(searchWord.toLowerCase())) ||
        (removeVI(value.name) + " " + removeVI(value.district)).toLowerCase().includes(removeVI(searchWord.toLowerCase()))
      );
    });

    if (searchWord === "") {
      setFilteredData([]);
      setFilteredDataProvince([]);
     
    } else {
      setFilteredData(newFilter);
      setFilteredDataProvince(newFilterProvince);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    setFilteredDataProvince([]);
  };

  function logOut() {
    localStorage.removeItem("userName");
    setAuth(false);
  }
  return (
    <div>
    <div class="row top-bar bg-primary p-2">
      <h3 class="col-auto" ><a href="/" class="text-secondary">Easy Parking</a></h3>

      <div class="input-group col px-4">
        <div class="col">
          <input
            type="search"
            placeholder={"nhap"}
            value={wordEntered}
            onChange={handleFilter}
            class="form-control rounded"
            placeholder="Tìm kiếm"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          
          
        </div>
        <div class="row">
        <button type="button" class="btn btn-secondary shadow-none">
          Tìm kiếm
        </button>
        </div>
      </div>

      <div class="col-auto d-flex align-items-center px-4">
        <div class="dropdown">
          <button class="btn btn-secondary shadow-none dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Tài khoản
          </button>
          {auth ?
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="/account">Thông tin tài khoản</a></li>
              <li><a class="dropdown-item" href="#" onClick={logOut}>Đăng xuất</a></li>
            </ul>
            :
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="/login">Đăng nhập</a></li>
              <li><a class="dropdown-item" href="#">Đăng ký</a></li>
            </ul>
          }

        </div>
      </div>
    </div>
    <div class=" ps-3">
    
    <div class="ps-5">
    <div class=" ps-5">
    <div class=" ps-5">
    <div class = " ps-5">
    <div class="col-9 border-radius">
    {(filteredDataProvince.length !== 0 || filteredData.length !== 0) && <div class="container-lg p-3 border pe-5 my-1 bg-warning bg-lighten-xl text-white">  
            
          {filteredDataProvince.length !== 0 && (
                 
                  <div class="dataret">
                  {filteredDataProvince.slice(0, 2).map((value, key) => {
                    return (
                      <NavLink to={"/Searching/"+ removeVI(value)} class="text-decoration-none text-secondary " onClick={clearInput}>
                        <div class="row">
                    <div class="col-auto pt-2">
                        <p style={{fontWeight: 500}}>
                          {value}{" "}
                        </p>
                        
                        </div>
                    <div class="col-auto">
                    <span class="badge rounded-pill bg-secondary">Địa điểm</span>
                    
                    </div>
                    </div>
                      </NavLink>
                      
                    );
                  })}
                  </div>
                
              )
                
            }
     
           

            { filteredData.length !== 0 && (
              
              <div class="dataret">
              {filteredData.slice(0, 4).map((value, key) => {
                return (
                  <NavLink to={"/Info/" + value._id} class="text-decoration-none text-secondary " onClick={clearInput}>
                   <div class="row">
                    <div class="col-auto pt-2">
                    <p style={{fontWeight: 500}}>
                      {value.name +
                        ", " +
                        value.ward +
                        ", " +
                        value.district +
                        ", " +
                        value.province}{" "}
                    </p>
                    </div>
                    <div class="col-auto">
                    <span style={{color: "black"}} class="badge rounded-pill bg-primary">Bãi đỗ</span>
                    </div>
                    </div>
                  </NavLink>
                );
              })
              
            }
            </div>
            )} 

</div>}
</div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
);
}
