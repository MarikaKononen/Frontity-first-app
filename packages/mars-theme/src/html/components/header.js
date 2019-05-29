import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import HeaderImage from "./header-image";

const Header = ({ state }) => (
  <>
    <Container>
      <StyledLink path="/">
        <Title>{state.frontity.title}</Title>
      </StyledLink>
      <Description>{state.frontity.description}</Description>
  
    </Container>
    <Nav />
  </>
);

export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h2`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
