import React from 'react'
import { useParams } from 'react-router'
import image1 from '../../Images/Lion.jpeg'
import image2 from '../../Images/Tiger1.jpg'
import image3 from '../../Images/Tiger2.avif'
import image4 from '../../Images/Tiger3.png'



export default function Params3() {

    const params = useParams()

  return (
   <>
   { params.id.class == "new" ? (
   <img src={image1} class="card-img-top" alt="..." />
   ): null}

   
   
   </>
  )
}
