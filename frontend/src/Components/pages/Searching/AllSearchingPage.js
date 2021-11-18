import React, { useState } from "react";
import SearchingPage  from './SearchingPage';
import axios from 'axios'
import { useParams } from "react-router";
import { useLocation } from "react-router";
import { removeVI } from "jsrmvi";
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
      this.parks2 = []
      
      this.num = 0;
      this.name = ''
      this.state = {
          parks: [],
          
      };
      axios.get('/parking/parking-searching').then((res) => {
          if (res.status == 200) {
             this.parks2 = res.data;
              this.setState({ parks: res.data });
          }
      }).catch(err => console.log(err));
  }
  get currentId() {
    var a = window.location.pathname.split('/');
  return a[2];
}
  GetNum(id){
    
    
    for (let i of this.parks2){
      
      if (id === removeVI(i.province)){
        this.name = i.province
        this.num += 1;
      }
    }
    return this.num
    
  }
  
    
    render(){
      return(
        <div>
           
           <SearchingPage Data = {this.state.parks} id = {this.currentId} num = {this.GetNum(this.currentId)} name ={this.name}></SearchingPage>
           </div>
      )
    }
       
}

  

export default AllSearchingPage