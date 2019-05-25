import React from "react";
import { connect, styled } from "frontity";
import Background from '../img/metsa.png';


const HeaderImage = () => {
    
    return  (
      <Container>
        <img src={Background} />
      </Container>
    ) 
  };

  export default connect(HeaderImage);



  const Container = styled.div`
    width: 100%;    

  `;