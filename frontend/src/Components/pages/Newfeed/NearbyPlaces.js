import React from "react";
import axios from "axios";
import SearchingCard from "../Searching/SearchingCard";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css' // Updating node module will keep css up to date.
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css' // Updating node module will keep css up to date.

mapboxgl.accessToken = "pk.eyJ1IjoiaGJuZ28yMSIsImEiOiJja3ZzYXFhZTkwZHVvMzBwY2d1aWRqOHZ4In0.KHDaXZbD8bjSKlB9rwuHnw";

export default class NearbyPlaces extends React.PureComponent {
  state = {
    parks : [
      {
      _id: String,
      name: String,
      street: String,
      ward : String,
      district: String,
      province: String,
      long: Number,
      lat: Number,
      description: String,
      img: Array,
      price: Array,
      }

    ],
    longitude: [Number],
    latitude: [Number],
    address: [String],
    userLongitude: Number,
    userLatitude: Number
  };

  constructor(props) {
    super(props);
    this.state = {
      //coordinates: [],
      parks: props.all,
      longitude: [],
      latitude: [],
      address: props.addressList,
      userLongitude: props.longitude,
      userLatitude: props.latitude
    };
  }

  async componentDidMount() {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            //If granted then you can directly call your function here
          } else if (result.state === "prompt") {
            console.log(result.state);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
            alert("Vui lòng mở định vị trên thiết bị của bạn!");
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Xin lỗi! Thiết bị của bạn không hỗ trợ chức năng định vị!");
    }
    var longitude = [Number];
    var latitude = [Number];
    longitude = this.state.address.map(address => {
      return axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaGJuZ28yMSIsImEiOiJja3ZzYXFhZTkwZHVvMzBwY2d1aWRqOHZ4In0.KHDaXZbD8bjSKlB9rwuHnw`
      )
      .then(res => res.data.features[0].center[0])
      .catch((err) => console.log(err));
    })
    latitude = this.state.address.map(address => {
      return axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaGJuZ28yMSIsImEiOiJja3ZzYXFhZTkwZHVvMzBwY2d1aWRqOHZ4In0.KHDaXZbD8bjSKlB9rwuHnw`
      )
      .then(res => res.data.features[0].center[1])
      .catch((err) => console.log(err));
    })
    Promise.all(longitude).then(res => {
      this.setState({longitude: res});
    })
    Promise.all(latitude).then(res => {
      this.setState({latitude: res});
    })
  }

  render() {
    var temp = []; // Chứa index của các bãi đỗ gần với định vị của người dùng (<= 5km)
    for (var i = 0; i < this.state.latitude.length; i++){
      var long1 = this.state.userLongitude * Math.PI / 180;
      var long2 = this.state.longitude[i] * Math.PI / 180;
      var lat1 = this.state.userLatitude * Math.PI / 180;
      var lat2 = this.state.latitude[i] * Math.PI / 180;
      let dlong = long2 - long1;
      let dlat = lat2 - lat1;
      let a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlong / 2),2);
      let c = 2 * Math.asin(Math.sqrt(a));
      let r = 6371;
      if (c * r <= 5){
        temp.push(i);
      }
    }
    var temp1 = []; //Chứa thông tin các bãi đỗ gần tôi.
    temp.map(i => temp1.push(this.state.parks[i]));
    const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
    if (temp1.length > 0)
      return (
        <div class="pt-0">
                <div class="row pe-5">
                  {temp1.map((parking) => {
                    var a='';
                    if(parking.price[0]>0) a = a+" Xe máy, "
                    if (parking.price[1]>0) a= a+ "Xe 4-7 chỗ, "
                    if (parking.price[2]>0) a= a+ "Xe 9-16 chỗ, "
                    if (parking.price[3]>0 ) a=a+"Xe 32 chỗ, "
                    a =a.slice(0, (-2));
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
                            type={a}
                          ></SearchingCard>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
      );
    else return (<h6 class="mt-4" style={{color: 'red'}}>Rất tiếc, không có bãi đỗ nào gần vị trí của bạn!</h6>)
  }
}
