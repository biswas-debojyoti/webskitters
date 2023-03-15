import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
 height: 60px;
 background-color:#68a5a4;
`;
const Wraper = styled.div`
padding :10px 20px;
`

const Navbar = () => {
  return (
    <Container>
      <Wraper>
        Navbar
      </Wraper>
    </Container>
  )
}

export default Navbar




