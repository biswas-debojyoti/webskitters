import React, { useState } from 'react'

 function About() {
  const [number,setnumber] = useState("debu");


  return (
    <div>
       <h1>{number}</h1>
        
        
    </div>
  )
}
export default About;

