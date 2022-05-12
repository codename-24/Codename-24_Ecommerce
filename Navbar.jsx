import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {mobile} from "../responsive";
import { Badge } from '@material-ui/core';

const Container = styled.div`
height:60px;
${mobile({height:"50px"})}

`
const Wrapper = styled.div `
padding :10px 20px;
display: flex;
justify-content: space-between;
align-items:center;
${mobile({padding:"10px 0px"})}
`
const Left = styled.div `
flex:1;
display:flex;
align-items:center;
`
const Langugage = styled.div`
font-size:14px;
cursor:pointer;
${mobile({display:"none"})}`

const SearchContainer = styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;


`
const Input = styled.div`
border:none;
height:25px;
width:200px;
cursor:pointer;
${mobile({width:"50px"})}
`

const Center = styled.div `
flex:1;
text-align:center;
`
const Logo = styled.div`
font-weight:bolder;
font-size:26px;
cursor:pointer;
${mobile({fontSize:"20px"})}
`
const Right = styled.div `
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({justifyContent:"center", flex:2})}
`
const MenuItem = styled.div`
 font-size:14px;
 cursor:pointer;
 margin-left:25px;
 ${mobile({fontSize:"12px", marginLeft:"10px"})}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
            <Langugage>EN</Langugage>
            <SearchContainer>
                <Input placeholder="Search"/>
                <SearchIcon style={{color:"gray", fontSize:16}}/>
                
                
            </SearchContainer>           
        </Left>
        <Center><Logo>CODENAME-24 </Logo></Center>
        <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
                
            <Badge badgeContent={1} color="primary">
            <ShoppingCartIcon/>
            </Badge>
                
            </MenuItem>
        </Right>
        </Wrapper>
        
        
    </Container>
  )
}

export default Navbar