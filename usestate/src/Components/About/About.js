import React, { useState } from 'react'

export default function About() {
  
  const [detail , setDetail] = useState({
    nam: "Debojyoti",
    mobile: "Samsung"
  })
  
  return (
    <>
    <h1>
      I am {detail.nam}
    </h1>
    <br/>
    <h4>
     My mobile is {detail.mobile}
    </h4>
    
    
    </>
  )
}
