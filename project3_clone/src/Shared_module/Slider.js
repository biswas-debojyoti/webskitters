import React, { useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import { slideItems } from '../Data'



const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
/* background-color: coral; */
position: relative;
overflow: hidden;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: teal;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`
const Wraper = styled.div`
height: 100%;
display: flex;
transform: translateX( ${(props)=> props.slideIndex * -100}vw);
transition: all 1.5s ;
`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg};
`
const Imagecontainer = styled.div`
height: 100%;
flex: 1;
`

const Image = styled.img`
height: 80%;
`

const Infocontainer = styled.div`
flex: 1;
padding: 50px;
`
const Title = styled.h1`
font-size: 60px;
letter-spacing: 3px;
font-family: 'Ubuntu', sans-serif;
`
const Desc = styled.p`
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
font-family: 'Ubuntu', sans-serif;
`
const Button = styled.button`
font-size: 20px;
background-color: transparent;
padding:10px;
cursor: pointer;
`

const Slider = () => {
const [slideIndex, setSlideIndex] = useState(0)
const handleClick = (direction) => {

    if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
    }
    else{
        setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
    }
};
    return (

        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wraper slideIndex={slideIndex}>
                {slideItems.map((item) =>(

                    <Slide bg= {item.bg}>
                    <Imagecontainer>
                        <Image src={item.img} />
                    </Imagecontainer>
                    <Infocontainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </Infocontainer>
                </Slide>
                ))}
                
            </Wraper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
