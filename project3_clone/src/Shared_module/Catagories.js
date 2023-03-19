import React from 'react'
import styled from 'styled-components'
import { catagories } from '../Data'
import CatagoryItems from './CatagoryItems'

const Container = styled.div`
display : flex;
padding : 20px;
`
const Catagories = () => {
  return (
    <Container>
      {catagories.map(item => (
        <CatagoryItems item={item} />
      ))}
    </Container>
  )
}

export default Catagories
