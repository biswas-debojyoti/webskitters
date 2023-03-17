import React from 'react'
import Navbar from '../Shared_module/Navbar'
import Announcement from '../Shared_module/Announcement'
import Slider from '../Shared_module/Slider'


const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
    </div>
  )
}

export default Home

