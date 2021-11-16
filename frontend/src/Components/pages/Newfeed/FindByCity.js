import MiniCard from "./MiniCard";
import { useState, useEffect } from "react";
import axios from "axios";

export function FindByCity(props){
  


  const [theData, setProvince] = useState([]);

  function getNumCity(value) {
    let count = 0;
    for (let i in theData) {
      if (theData[i].province == value) {
        count = count + 1;
      }
    }
    return count;
  }

  useEffect(() => {
    axios
      .get("/parking/parking-searching")
      .then((res) => {
        if (res.status == 200) {
          setProvince(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

    return(
        <div class="pt-0">
            <div class="row row-cols-auto">
              {props.data.map((mini) => {
              return (
                <div class="col">
                  <div class="pt-3">
                    <MiniCard
                      name={mini}
                      number={getNumCity(mini)}
                    ></MiniCard>
                  </div>
                </div>
              );
            })}
            </div>
        </div>
    )
}