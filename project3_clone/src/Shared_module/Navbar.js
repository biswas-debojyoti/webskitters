import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';





const Container = styled.div`
height: 60px;
/* background-color:#68a5a4; */
/* border: 1px solid red; */
`;
const Wraper = styled.div`
/* padding :0 px 20px; */
display: flex;
justify-content: space-between;
align-items: center;
`;
const Left = styled.div`
flex: 1;
height: 100%;
display: flex;
align-items: center;
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border: none;
`

const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
font-weight: bolder;
font-family: 'Ubuntu', sans-serif;
`

const Right = styled.div`
flex: 1;
display: flex;
justify-content: center;
justify-content: flex-end;
margin-right: 10px;
`
const Manuitem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wraper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LOGO</Logo>
        </Center>
        <Right>
          <Manuitem>REGISTER</Manuitem>
          <Manuitem>LOG IN</Manuitem>
          <Manuitem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Manuitem>
        </Right>
      </Wraper>
    </Container>
  )
}

export default Navbar




