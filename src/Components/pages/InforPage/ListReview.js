import   './ListReview.css';

import { Review } from './Review'
const ARR_REVIEW = [
    ["Nguyễn Văn Xuân Vũ", "17h58 18/10/2021", 5, 10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/213184328_1213672855719993_5482927007551588014_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=f0yyPuXCL6AAX_E11vd&_nc_ht=scontent.fdad3-3.fna&oh=30fa54f19f9e55035a2eba709dec7048&oe=61A4C4F7"],
    ["Nguyễn Văn", "17h58 18/10/2021", 3, 9, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/213184328_1213672855719993_5482927007551588014_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=f0yyPuXCL6AAX_E11vd&_nc_ht=scontent.fdad3-3.fna&oh=30fa54f19f9e55035a2eba709dec7048&oe=61A4C4F7"],


]
export function ListReview(){
    return(
        <div class= "col pt-4">
        <h5>Đánh giá của khách</h5>
        <div class="row pt-3">
              <div class="col-auto">
              
              <div class="btn datngay" disabled>
              7.6
            </div>
                 
                
              </div>
              <div class="col">
              <div class="pt-2 numreview">
                Tổng cộng có {ARR_REVIEW.length } đánh giá
                </div>
              </div>
        </div>
        <div class="col">
        {ARR_REVIEW.map((review) => {

            return (
               
                <Review
                name={review[0]}
                time={review[1]}
                star={review[2]}
                numLike={review[3]}
                content={review[4]}
                avasrc  = {review[5]}
                
              ></Review>
              
            );
          })}
        </div>
        </div>
    );
}
    
    