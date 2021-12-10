import React from "react";
import styled from "styled-components";

const Div = styled.div`
    
`;
const H2 = styled.h2``;

const Wrapper = styled.section`
  display:flex;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color:red;
`;

const Form = styled.form``;

const InputField = styled.input`
  width:100px;
  height:20px;
`;

function Home(){
    return(
        
      //styled component
      <Wrapper>
        <Title>
            홈 로그인
        </Title>
        <Form
          method='GET'
          action='/Main'
        >
          <InputField 
            type='text'
            name='id'
          />
          <InputField 
            type='password'
            name='password'
          />
          <InputField 
            type='submit'
          />
        </Form>
      </Wrapper>
    )
}

export default Home;