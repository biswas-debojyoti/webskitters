import React, { useState } from 'react'

export default function Parent() {

  const [value , setValue ] = useState(10)
  const [oneplus , setOneplus ] = useState(0)

 const incriment = function(){ 
    setOneplus(oneplus+1)
  }


  return (
    <div>
      <h1>{value}</h1>
      <h4>{oneplus}</h4>
      <button onClick = {incriment}>Click me</button>

    </div>
  )
}





