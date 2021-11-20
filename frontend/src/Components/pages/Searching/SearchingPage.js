import "./SearchingPage.css";
import SearchingCard from "./SearchingCard";
import { SortBar } from "./SortBar";
import { SideBarSearch } from "./SideBarSearch";

import { Component } from "react";
import { removeVI, DefaultOption } from "jsrmvi";
class SearchingPage extends Component {
  constructor(props) {
    super(props);
    this.flagleft = false;
    this.flag = true;
    this.last = [];
    this.arr = [false, false, false, false];
    this.sort = false;
    this.count = props.Data.length;
    // Set initial state
    this.state = { data: props.Data };
    this.count1 = 0;
    // this.handleClick = this.handleClick.bind(this);
    this.numParking = this.props.num;
    this.Num = 0;
    this.handleClickDown = this.handleClickDown.bind(this);
    this.handleClickUp = this.handleClickUp.bind(this);
    this.handleXemay = this.handleXemay.bind(this);
    this.handleOto1 = this.handleOto1.bind(this);
    this.handleOto2 = this.handleOto2.bind(this);
    this.handleOto3 = this.handleOto3.bind(this);
    this.handleAll = this.handleAll.bind(this);
  }
  handleXemay() {
    this.arr[0] = !this.arr[0];
    this.handleAll();
  }
  uniq(a) {
    return a.sort().filter(function (item, pos, ary) {
      return !pos || item !== ary[pos - 1];
    });
  }
  handleOto1() {
    this.arr[1] = !this.arr[1];
    this.handleAll();
  }
  handleOto2() {
    this.arr[2] = !this.arr[2];
    this.handleAll();
  }

  handleOto3() {
    this.arr[3] = !this.arr[3];
    this.handleAll();
  }

  handleAll() {
    this.flagleft = true;
    if (this.flag === true) {
      var ans = this.props.Data;

      var ans2 = [];
      for (let i in ans) {
        for (let j in ans[i].price) {
          if (ans[i].price[j] > 0 && this.arr[j]) {
            ans2.push(ans[i]);
            break;
          }
        }
      }
      

      ans2 = this.uniq(ans2);
      if (
        this.arr[0] === false &&
        this.arr[1] === false &&
        this.arr[2] === false &&
        this.arr[3] === false
      ) {
        this.setState({ data: this.props.Data });
        this.flagleft = false;
      } else {
        this.setState({ data: ans2 });
      }
    } else {
      var ans = this.state.data;
      var ans1 = this.props.Data;
      var ans2 = [];

      for (let i in ans) {
        for (let j in ans[i].price) {
          if (ans[i].price[j] > 0 && this.arr[j]) {
            ans2.push(ans[i]);
            break;
          }
        }
      }
      for (let i in ans1) {
        for (let j in ans1[i].price) {
          if (ans1[i].price[j] > 0 && this.arr[j] && !ans2.includes(ans1[i])) {
            ans2.push(ans1[i]);
            break;
          }
        }
      }

      ans2 = this.uniq(ans2);
      if (this.sort === true){
        ans2 = ans2.sort(
          (a, b) =>
            this.average(
              a.feedback.map((e) => {
                return e.rate;
              })
            ) -
            this.average(
              b.feedback.map((f) => {
                return f.rate;
              })
            )
        );
    
        for (let i in ans2) {
          if (ans2[i].feedback.length === 0) {
            ans2.push(ans2[i]);
            ans2.splice(i, 1);
          }
        }
      }
      else {
        ans2 = ans2.sort(
          (a, b) =>
            this.average(
              b.feedback.map((e) => {
                return e.rate;
              })
            ) -
            this.average(
              a.feedback.map((f) => {
                return f.rate;
              })
            )
        );
    
        for (let i in ans2) {
          if (ans2[i].feedback.length === 0) {
            ans2.push(ans2[i]);
            ans2.splice(i, 1);
          }
        }
      }
      if (
        this.arr[0] === false &&
        this.arr[1] === false &&
        this.arr[2] === false &&
        this.arr[3] === false
      ) {
        this.setState({ data: this.props.Data });
        this.flagleft = false;
      } else {
        this.setState({ data: ans2 });
      }
    }

  }
  handleClickDown() {
    this.flag = false;
    var theData = [];
    if (this.flagleft === true) {
      theData = this.state.data;
    } else {
      theData = this.props.Data;
    }
    theData = theData.sort(
      (a, b) =>
        this.average(
          b.feedback.map((e) => {
            return e.rate;
          })
        ) -
        this.average(
          a.feedback.map((f) => {
            return f.rate;
          })
        )
    );

    for (let i in theData) {
      if (theData[i].feedback.length === 0) {
        theData.push(theData[i]);
        theData.splice(i, 1);
      }
    }

    this.setState({ data: theData });
    this.sort = false;
    this.last = theData;
  }

  handleClickUp() {
    this.flag = false;
    var theData = [];
    if (this.flagleft === true) {
      theData = this.state.data;
    } else {
      theData = this.props.Data;
    }

    theData = theData.sort(
      (a, b) =>
        this.average(
          a.feedback.map((e) => {
            return e.rate;
          })
        ) -
        this.average(
          b.feedback.map((f) => {
            return f.rate;
          })
        )
    );

    for (let i in theData) {
      if (theData[i].feedback.length === 0) {
        theData.push(theData[i]);
        theData.splice(i, 1);
      }
    }

    this.setState({ data: theData });
    this.sort = true;
    this.last = theData;
  }

  get Numparking() {
    this.Num = 0;
    for (let i of this.props.Data) {
      if (removeVI(i.province) === this.props.id) {
        this.Num = this.Num + 1;
      }
    }
    return this.Num;
  }

  theData = this.props;

  average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

  GetType(value) {
    var a = "";
    if (value.price[0] > 0) a = a + " Xe máy, ";
    if (value.price[1] > 0) a = a + "Xe 4-7 chỗ, ";
    if (value.price[2] > 0) a = a + "Xe 9-16 chỗ, ";
    if (value.price[3] > 0) a = a + "Xe 32 chỗ, ";
    a = a.slice(0, -2);

    return a;
  }

  dem() {
    this.count = 0;
    this.count1 = 0;
    for (let i of this.state.data) {
      if (removeVI(i.province) === this.props.id) {
        this.count = this.count + 1;
      }
    }
    for (let i of this.props.Data) {
      if (removeVI(i.province) === this.props.id) {
        this.count1 = this.count1 + 1;
      }
    }
    if (this.flagleft == 0) {
      return this.count1;
    } else {
      return this.count;
    }
  }
  render() {
    return (
      <div class="row h-100">
        <div class="col-auto">
          <div className="sidebar bg-secondary p-4 h-100">
            <h5 class="card-title">Chọn lọc theo</h5>
            <h6 class="card-title pt-4">Loại xe</h6>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onClick={this.handleXemay}
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
                onClick={this.handleOto1}
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
                onClick={this.handleOto2}
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
                onClick={this.handleOto3}
                id="flexCheckChecked"
                check
              />
              <label class="form-check-label" for="flexCheckChecked">
                Xe 32 chỗ
              </label>
            </div>
          </div>

          {/* ////// */}
        </div>
        <div class="col">
          <div class="pt-2">
            <div class="col pt-4">
              <h3 class="PlaceName">
                {this.props.name +
                  ": Đã tìm thấy " +
                  // this.Numparking +
                  this.dem() +
                  " bãi đỗ xe"}
              </h3>
              <div class="pt-1">
                <div class="table-responsive table-borderless">
                  <thead>
                    <tr>
                      <th scope="col" class="align-middle pe-4">
                        Sắp xếp theo:
                      </th>
                      <th scope="col">
                        {/* <SortBar /> */}
                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic radio toggle button group"
                        >
                          <input
                            type="radio"
                            class="btn-check"
                            name="btnradio"
                            id="btnradio3"
                            autocomplete="off"
                            onClick={this.handleClickDown}
                          />
                          <label
                            class="btn btn-outline-primary shadow-none"
                            for="btnradio3"
                          >
                            Hạng sao giảm dần
                          </label>

                          <input
                            type="radio"
                            class="btn-check"
                            name="btnradio"
                            id="btnradio4"
                            autocomplete="off"
                            onClick={this.handleClickUp}
                          />
                          <label
                            class="btn btn-outline-primary shadow-none"
                            for="btnradio4"
                          >
                            Hạng sao tăng dần
                          </label>
                        </div>
                      </th>
                    </tr>
                  </thead>
                </div>
              </div>
              <div class="pt-4">
                <div class="row">
                  {this.flag === true &&
                    this.flagleft === false &&
                    this.props.Data.map((parking) => {
                      if (removeVI(parking.province) === this.props.id)
                        return (
                          <div class="col-lg-4 d-flex align-items-stretch">
                            <div class="pt-5 pe-3">
                              <SearchingCard
                                class="searchcard"
                                id={parking._id}
                                name={parking.name}
                                src={parking.img[0]}
                                star={this.average(
                                  parking.feedback.map((each) => {
                                    return each.rate;
                                  })
                                )}
                                numEvaluate={parking.feedback.length}
                                address={
                                  parking.street +
                                  ", " +
                                  parking.ward +
                                  ", " +
                                  parking.district
                                }
                                type={this.GetType(parking)}
                              ></SearchingCard>
                            </div>
                          </div>
                        );
                    })}
                  {this.flag === true &&
                    this.flagleft === true &&
                    this.state.data.map((parking) => {
                      if (removeVI(parking.province) === this.props.id)
                        return (
                          <div class="col-lg-4 d-flex align-items-stretch">
                            <div class="pt-3 pe-3">
                              <SearchingCard
                                class="searchcard"
                                id={parking._id}
                                name={parking.name}
                                src={parking.img[0]}
                                star={this.average(
                                  parking.feedback.map((each) => {
                                    return each.rate;
                                  })
                                )}
                                numEvaluate={parking.feedback.length}
                                address={
                                  parking.street +
                                  ", " +
                                  parking.ward +
                                  ", " +
                                  parking.district
                                }
                                type={this.GetType(parking)}
                              ></SearchingCard>
                            </div>
                          </div>
                        );
                    })}
                  {this.flag === false &&
                    this.flagleft === true &&
                    this.state.data.map((parking) => {
                      if (removeVI(parking.province) === this.props.id)
                        return (
                          <div class="col-lg-4 d-flex align-items-stretch">
                            <div class="pt-3 pe-3">
                              <SearchingCard
                                class="searchcard"
                                id={parking._id}
                                name={parking.name}
                                src={parking.img[0]}
                                star={this.average(
                                  parking.feedback.map((each) => {
                                    return each.rate;
                                  })
                                )}
                                numEvaluate={parking.feedback.length}
                                address={
                                  parking.street +
                                  ", " +
                                  parking.ward +
                                  ", " +
                                  parking.district
                                }
                                type={this.GetType(parking)}
                              ></SearchingCard>
                            </div>
                          </div>
                        );
                    })}
                  {this.flag === false &&
                    this.flagleft === false &&
                    this.state.data.map((parking) => {
                      if (removeVI(parking.province) === this.props.id)
                        return (
                          <div class="col-lg-4 d-flex align-items-stretch">
                            <div class="pt-3 pe-3">
                              <SearchingCard
                                class="searchcard"
                                id={parking._id}
                                name={parking.name}
                                src={parking.img[0]}
                                star={this.average(
                                  parking.feedback.map((each) => {
                                    return each.rate;
                                  })
                                )}
                                numEvaluate={parking.feedback.length}
                                address={
                                  parking.street +
                                  ", " +
                                  parking.ward +
                                  ", " +
                                  parking.district
                                }
                                type={this.GetType(parking)}
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
}
export default SearchingPage;
