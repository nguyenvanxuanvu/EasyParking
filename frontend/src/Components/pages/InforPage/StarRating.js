
import React, {useState} from 'react';
export function StarRating({count}) {

    const inactiveColor='rgba(255, 213, 59, 1)';
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
            style={{color: style}}
           >{s}</span>
        )
      })}
      
    </div>
  )
}