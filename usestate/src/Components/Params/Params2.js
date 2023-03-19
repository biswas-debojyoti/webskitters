import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import image1 from '../../Images/Lion.jpeg'
import image2 from '../../Images/Tiger1.jpg'
import image3 from '../../Images/Tiger2.avif'
import image4 from '../../Images/Tiger3.png'


export default function Params2() {


    return (
        <>

            <div class="card" >
                <img src={image1} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

           
        </>
    )
}

