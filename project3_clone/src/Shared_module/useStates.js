import React from 'react'
import { useState } from "react";
import styled from 'styled-components';
// import ReactDOM from "react-dom/client";
 const Container = styled.div`
 `
const useStates = () => {
    const [color, setColor] = useState("red");

  return (
    <Container>
    <h1>My favorite color is {color}!</h1>
    <button
      type="button"
      onClick={() => setColor("blue")}
    >Blue</button>
  </Container >
  )
}

export default useStates;



// function FavoriteColor() {

//   return (
   
//   )
// }