import React from 'react';

function Input({ checkFunction, status }){
  return(
    <input type="checkbox" onChange={checkFunction} checked={status}/>
  )
}

export { Input };
