import React from 'react'
import { Link } from 'react-router-dom' 
import image1 from '../../Images/Lion.jpeg'
import image2 from '../../Images/Tiger1.jpg'
import image3 from '../../Images/Tiger2.avif'
import image4 from '../../Images/Tiger3.png'

export default function Params3() {
  return (
    <div>
       <div class="card-deck">
                <div class="card">
                    <img src={image2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <Link to="/Params4/tiger/new" class="btn btn-primary">Go somewhere</Link>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img src={image3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <Link to="/Params4/tiger/young" class="btn btn-primary">Go somewhere</Link>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img src={image4} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <Link to="/Params4/tiger/old" class="btn btn-primary">Go somewhere</Link>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>

    </div>
  )
}
