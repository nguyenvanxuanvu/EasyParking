
import React, {useState} from 'react';
export function StarRating({count}) {

    const inactiveColor='#f1f1e8';
    const activeColor='rgba(255, 213, 59, 1)'

  const stars = Array.from({length: count}, () => '🟊')

  

  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < count) {
          style=activeColor;
        }
        return (
          <span className={"star"}  
            key={index}
            style={{color: style, width:25, height:25, fontSize: 25}}
           >{s}</span>
        )
      })}
      
    </div>
  )
}