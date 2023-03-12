import React from 'react'
import { useParams } from 'react-router'
import image1 from '../../Images/image1.jpg'
import image2 from '../../Images/image2.jpg'
import image3 from '../../Images/image3.jpg'
import image4 from '../../Images/image4.jpg'

export default function Param2() {
 const param = useParams()


  return (
   <>
   {param.id == 1 ? (
   <div class="card bg-dark text-white">
   <img src={image1} class="card-img" alt="..."/>
   <div class="card-img-overlay">
   <h1 class="card-title">Card title</h1>
      <h2 class="card-text"> This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h2>
     <p class="card-text">Last updated 3 mins ago</p>
   </div>
 </div>
   ):null}
   {param.id == 2 ? (
    <div class="card bg-dark text-white">
    <img src={image2} class="card-img" alt="..."/>
    <div class="card-img-overlay">
    <h1 class="card-title">Card title</h1>
      <h2 class="card-text"> This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h2>
      <p class="card-text">Last updated 3 mins ago</p>
    </div>
  </div>
   ):null}
   {param.id == 3 ? (
    <div class="card bg-dark text-white">
    <img src={image3} class="card-img" alt="..."/>
    <div class="card-img-overlay">
    <h1 class="card-title">Card title</h1>
      <h2 class="card-text"> This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h2>
      <p class="card-text">Last updated 3 mins ago</p>
    </div>
  </div>
   ):null}
   {param.id == 4 ? (
    <div class="card bg-dark text-white">
    <img src={image4} class="card-img" alt="..."/>
    <div class="card-img-overlay">
      <h1 class="card-title">Card title</h1>
      <h2 class="card-text"> This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h2>
      <p class="card-text">Last updated 3 mins ago</p>
    </div>
  </div>
   ):null}
   </>
  )
}
