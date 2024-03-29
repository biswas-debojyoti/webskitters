import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <>
      <div>
        <nav id='navbar' class="navbar navbar-expand-lg navbar-light bg-light">
          <Link class="navbar-brand" to="/">Navbar</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-Link" to="/">Home <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-Link" to="/About">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-Link disabled" to = "/Detail" >Detail</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-Link" to="/Params1">Params</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      
    </>
  )
}





