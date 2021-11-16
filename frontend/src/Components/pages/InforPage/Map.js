import React from "react";
import axios from "axios";
import "./Map.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = "pk.eyJ1IjoiaGJuZ28yMSIsImEiOiJja3ZzYXFhZTkwZHVvMzBwY2d1aWRqOHZ4In0.KHDaXZbD8bjSKlB9rwuHnw";

export default class Map extends React.PureComponent {
  state = {
    lng: Number,
    lat: Number,
    address: String,
  };
  constructor(props) {
    super(props);
    this.state = {
      lng: null,
      lat: null,
      address: props.address,
    };
    this.mapContainer = React.createRef();
  }
  async componentDidMount() {
    await axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.address}.json?access_token=pk.eyJ1IjoiaGJuZ28yMSIsImEiOiJja3ZzYXFhZTkwZHVvMzBwY2d1aWRqOHZ4In0.KHDaXZbD8bjSKlB9rwuHnw`
      )
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            lng: res.data.features[0].center[0],
            lat: res.data.features[0].center[1],
          });
        }
      })
      .catch((err) => console.log(err));
    const { lng, lat, address } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 14,
    });
    // Set marker options.
    const marker = new mapboxgl.Marker({
      color: "red",
      draggable: true,
    })
      .setLngLat([lng, lat])
      .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(this.state.address))
      .addTo(map);
  }
  render() {
    return (
      <div>
        <div ref={this.mapContainer} className="map-container" />
      </div>
    );
  }
}
