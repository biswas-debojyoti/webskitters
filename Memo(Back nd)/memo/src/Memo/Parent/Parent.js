import React, { useState } from 'react'
import Child from '../Child/Child'

export default function Parent() {
  const [value , setValue ] = useState(100)
  const [oneplus , setOneplus ] = useState(0)

 const incriment = function(){ 
    setOneplus(oneplus+5)
  }


  return (
    <div>
      {/* <h1>{value}</h1> */}
      <h4>{oneplus}</h4>
      <button onClick = {incriment}>Click me</button>
      <Child data = {value}/>

    </div>
  )
}





