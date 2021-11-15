import   './ListReview.css';
import React from 'react';
import { Review } from './Review'

const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;

export function ListReview(props){
    
    return(
        <div class= "col pt-4">
        <h5>Đánh giá của khách</h5>
        <div class="row pt-3">
              <div class="col-auto">
              
              <div class="btn datngay" disabled>
              {props.data.length>0 && (average(props.data.map((each)=>{
                return each.rate
              })).toFixed(1))}

              {props.data.length<=0 && (<div>*</div>)}
            </div>
                 
                
              </div>
              <div class="col">
              <div class="pt-2 numreview">
                Tổng cộng có {props.data.length } đánh giá
                </div>
              </div>
        </div>
        <div class="col">
        {props.data.map((review) => {

            return (
               
                <Review
                name={review.userName}
                time={(review.time)}
                star={review.rate}
    
                content={review.content}
                avasrc  = {"https://th.bing.com/th?q=Generic+Person+Avatar&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.25&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=en&adlt=moderate&t=1&mw=247"}
                
              ></Review>
              
            );
          })}
        </div>
        </div>
    );
}
    
    