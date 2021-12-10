import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-direction: column;
`;
const Div = styled.div`
    margin:0 auto
`;


const H1 = styled.h1``;

const H2 = styled.h2`
    margin:0 auto;
    padding:100px;
`;

const Image = styled.img.attrs({
    src:'images/main.jpg'
})`
width:100%;
border:1px solud green;
margin:0 auto
`;

function Main(){
    return(
        <Container as='section'>
            <H2>
                메인타이틀
            </H2>
            
            <Div>
                내용
            </Div>
            
        </Container>
    )
}

export default Main;
