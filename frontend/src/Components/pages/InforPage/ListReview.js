import "./ListReview.css";
import React from "react";
import { Review } from "./Review";
import { useState } from "react";
import { StarRate } from "./star";
import { Component } from "react";
 import axios from "axios";
 import moment from 'moment'
 import Moment from 'moment'
const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

class ListReview extends Component {
  constructor(props) {
    super(props);
    this.flag = true;

    // Set initial state

    this.state = { data: [], star: 1, content: "" };

    this.time = new Date();
    this.name = "@name";
    // Binding this keyword
    this.handleRating = this.handleRating.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleContent = this.handleContent.bind(this);
  }

  handleClick() {
    if (this.flag === true) {
      for (let i in this.props.data) {
        this.state.data.push(this.props.data[i]);
      }
    }

    this.flag = false;
    var each = [{
      userName: this.name,
      content: this.state.content,
      time: new Date(),
      rate: this.state.star,
    }, {id: this.props.id}
  ];
  
    
    axios.post('/parking/addfeedback', each)
                

   
    this.state.data.push(each[0]);
    
    this.setState({
      data: this.state.data,
      star: this.state.star,
      content: this.state.content,
    });
    
    this.handleRating(0);
    
  }
  handleContent(value) {
    this.setState({
      data: this.state.data,
      star: this.state.star,
      content: value,
    });
  }

  handleRating(e) {
    this.setState({
      data: this.state.data,
      star: e,
      content: this.state.content,
    });
  }

  render() {
    return (
      <div class="col pt-4">
        <h5>Đánh giá của khách hàng</h5>
        <div class="row pt-3">
          <div class="col-auto">
            <div class="btn datngay" disabled>
              {this.flag === true &&
                this.props.data.length > 0 &&
                average(
                  this.props.data.map((each) => {
                    return each.rate;
                  })
                ).toFixed(1)}

              {this.flag === true && this.props.data.length <= 0 && (
                <div>*</div>
              )}

              {this.flag === false &&
                this.state.data.length > 0 &&
                average(
                  this.state.data.map((each) => {
                    return each.rate;
                  })
                ).toFixed(1)}
            </div>
          </div>
          <div class="col">
            <div class="pt-2 numreview">
              Tổng cộng có {this.flag === false && this.state.data.length}{" "}
              {this.flag === true && this.props.data.length} đánh giá
            </div>
          </div>
        </div>
        <div class="col">
          {this.flag === true &&
            this.props.data.map((review) => {
              return (
                <Review
                  name={review.userName}
                  time={Moment(review.time).utcOffset('+07:00')
                  .format('hh:mm DD/MM/YYYY')
                 }
                  star={review.rate}
                  content={review.content}
                  avasrc={
                    "https://th.bing.com/th?q=Generic+Person+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.25&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=en&adlt=moderate&t=1&mw=247"
                  }
                ></Review>
              );
            })}
          {this.flag === false &&
            this.state.data.map((review) => {
              return (
                <Review
                  name={review.userName}
                  time={Moment(review.time).utcOffset('+07:00')
                  .format('hh:mm DD/MM/YYYY')}
                  star={review.rate}
                  content={review.content}
                  avasrc={
                    "https://th.bing.com/th?q=Generic+Person+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.25&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=en&adlt=moderate&t=1&mw=247"
                  }
                ></Review>
              );
            })}

          <div class="row pt-4">
          
            <div class="col">
              
              <div class="row">
              
                <div class="col-auto">
                  <img
                    src="https://th.bing.com/th?q=Generic+Person+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.25&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=en&adlt=moderate&t=1&mw=247"
                    alt="Avatar"
                    class="avatar"
                  ></img>
                </div>
                <div class="col-8 ps-1 pt-3">
                
                  <div class="nameReviewer">@name</div>

                  <div class="row">
                    <div class="col-auto">
                      <StarRate
                        count={5}
                        size={40}
                        value={this.state.star}
                        onChange={this.handleRating}
                      />
                    </div>
                  </div>
                  <div class="row pt-3">
                    <div class="contentReview">
                      <div class="form-group">
                        <textarea
                          value={this.state.content}
                          onChange={(e) => this.handleContent(e.target.value)}
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="pt-2"></div>
                  <div onClick={this.handleClick} class="btn datngay">
                    Gửi
                  </div>

                  <div class="pt-2">
                    <div class="pt-3  border-bottom"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListReview;
