import React from 'react';
import { useParams } from 'react-router-dom';



const Routing = () => {

    const { numberUnicorn, color1, color2 } = useParams();
    
   
  return (
    <div>
        
        {isNaN (numberUnicorn) ?
        <h2 style={ color1 ? {color: color1, backgroundColor: color2} : null }> The word is {numberUnicorn}! </h2> :
        <h2> The number is: {numberUnicorn} </h2> 
        }

    </div>
  )
}

export default Routing