import styled from "styled-components";
const Container = styled.div`
height:30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:bolder;
`

const Announcement = () => {
  return (
    <Container>
        Free shipping
    </Container>
  )
}

export default Announcement