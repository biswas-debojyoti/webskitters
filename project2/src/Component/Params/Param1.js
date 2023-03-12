import React from 'react'
import image1 from '../../Images/image1.jpg'
import image2 from '../../Images/image2.jpg'
import image3 from '../../Images/image3.jpg'
import image4 from '../../Images/image4.jpg'
import image5 from '../../Images/image5.jpg'
import image6 from '../../Images/image6.jpg'

import { Link } from 'react-router-dom'
export default function Param1() {
  return (
    <>

      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4">
          <div class="card">
            <img src={image1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <Link to="/param2/1" class="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src={image2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <Link to="/param2/2" class="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src={image3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              <Link to="/param2/3" class="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src={image4} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <Link to="/param2/4" class="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>
      </div>






      {/* 
      <Link to = "/param2/1" >
<button type="">Click 1</button>     </Link>
     <Link to = "/param2/2" >
<button type="">Click 2</button>     </Link>
     <Link to = "/param2/3" >
<button type="">Click 3</button>     </Link> */}

    </>
  )
}
