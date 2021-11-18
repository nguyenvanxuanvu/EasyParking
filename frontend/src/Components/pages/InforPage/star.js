import React, {useState} from 'react';   

export function StarRate({count, value, 
    inactiveColor= '#f1f1e8',
    
    activeColor='rgba(255, 213, 59, 1)', onChange}) {

  // short trick 
  const stars = Array.from({length: count}, () => '🟊')

  // Internal handle change function
  const handleChange = (value) => {
    onChange(value + 1);
  }

  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style=activeColor;
        }
        return (
          <span className={"star"}  
            key={index}
            style={{color: style, width:25, height:25, fontSize: 25}}
            onClick={()=>handleChange(index)}>{s}</span>
        )
      })}
      
    </div>
  )
}
