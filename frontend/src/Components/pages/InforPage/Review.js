import "./Review.css";
import { StarRating } from "./StarRating";
import Moment from "moment";
import  { StarRate } from "./star";
import { useState } from "react";
export function Review(props) {

  return (
    <div class="row pt-4">
      <div class="col">
        <div class="row">
          <div class="col-auto">
            <img src={props.avasrc} alt="Avatar" class="avatar"></img>
          </div>
          <div class="col-8 ps-1 pt-3">
            <div class="nameReviewer">{props.name}</div>
            <div class="timeReview">
              Vào lúc{" "}
              {props.time }
                
            </div>

            <div class="row">
              <div class="col-auto">
                <StarRating  count={props.star} />
              </div>
            </div>
            <div class="row pt-3">
              <div class="contentReview">{props.content}</div>
            </div>
            <div class="pt-2">
              <div class="pt-3  border-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
