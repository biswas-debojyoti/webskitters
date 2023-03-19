import React from 'react'
import { useParams } from 'react-router'
import image1 from '../../Images/Lion.jpeg'
import image2 from '../../Images/Tiger1.jpg'
import image3 from '../../Images/Tiger2.avif'
import image4 from '../../Images/Tiger3.png'


export default function Params4() {
    const param = useParams()

    return (
        <>
            {param.id == "new" ? (
                <img src={image2} class="card-img-top" alt="..." />
            ) : null}
            {param.id == "young" ? (
                <img src={image3} class="card-img-top" alt="..." />
            ) : null}
            {param.id == "old" ? (
                <img src={image4} class="card-img-top" alt="..." />
            ) : null}


        </>
    )
}
