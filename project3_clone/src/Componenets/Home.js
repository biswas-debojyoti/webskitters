import React from 'react'
import Navbar from '../Shared_module/Navbar'
import Announcement from '../Shared_module/Announcement'
import Slider from '../Shared_module/Slider'
import Catagories from '../Shared_module/Catagories'
import useStates from '../Shared_module/useStates'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Catagories/>
      <useStates/>
    </div>
  )
}

export default Home

