import React, { useState } from "react";
import { SearchingPage } from './SearchingPage';
import axios from 'axios'
class AllSearchingPage extends React.Component {

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
  
      ]
    }
    constructor(props) {
      super(props);
      this.state = {
          parks: []
      };
      axios.get('/parking/parking-searching').then((res) => {
          if (res.status == 200) {
              this.setState({ parks: res.data });
          }
      }).catch(err => console.log(err));
  }
  
    
    render(){
      return(
           <SearchingPage Data = {this.state.parks}></SearchingPage>
          
      )
    }
       
}

  

export default AllSearchingPage