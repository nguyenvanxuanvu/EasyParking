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

      <div class="col-auto px-2 border border-secondary">
        <a href="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="100%"
            fill="currentColor"
            class="bi bi-cart2 text-secondary"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
          {/* <span class="col bg-secondary text-white m-2 px-2 rounded">2</span> */}
        </a>
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
                        
                        <p style={{fontWeight: 500}}>
                          {value}{" "}
                        </p>
                        
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
                   
                    <p style={{fontWeight: 500}}>
                      {value.name +
                        ", " +
                        value.ward +
                        ", " +
                        value.district +
                        ", " +
                        value.province}{" "}
                    </p>
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
