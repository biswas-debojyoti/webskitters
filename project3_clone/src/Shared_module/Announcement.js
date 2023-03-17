import React from 'react'
import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
display: flex;
justify-content: center;
align-items: center;
`
const Announcement = () => {
  return (
    <Container>
        Super Deal! For Today Order Now At Just 40$
    </Container>
    
  )
}

export default Announcement
