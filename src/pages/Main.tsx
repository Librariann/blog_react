import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    justify-content: center;
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
display:flex;
justify-content: center;
width:100%;
border:1px solud green;
margin:0 auto
`;

const Footer = styled.div`
    display:flex;
    align-items: flex-start;
    justify-content: space-between;
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
            <Footer>
                푸터
            </Footer>
            
        </Container>
    )
}

export default Main;
