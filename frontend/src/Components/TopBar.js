import React, { useState } from "react";

import { TopBarSearch } from "./TopBarSearch";
import axios from "axios";
class TopBar extends React.Component {

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
            
             <TopBarSearch Data = {this.state.parks}></TopBarSearch>
              
          )
        }
           
}

      

export default TopBar