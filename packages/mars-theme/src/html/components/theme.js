import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Page404 from "./page404.js";
import Introduction from "./introduction";


const globalStyles = css`
  body {
    margin: 0;
    font-family: "Comic Sans MS", cursive, sans-serif;
    color: #3d5c5c;  
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const Theme = ({ state }) => (
  <>
    
    <Head>
      <title>{state.frontity.title}</title>
      <html lang="en" />
    </Head>
    <Global styles={globalStyles} />
    <HeadContainer>
      <Header />
    </HeadContainer>
    <IntroductionContainer>
        <Introduction />
    </IntroductionContainer>
 
    <Body>
        
      {state.source.data(state.router.path).isArchive && <List />}
      {state.source.data(state.router.path).isPostType && <Post />}
      {state.source.data(state.router.path).is404 && <Page404 />}
        
    </Body>  
 
    
      
  
  </>
);

export default connect(Theme);


const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ff9900;
  padding-bottom: 1rem;
`;

const Body = styled.div`
  background-color: #e0ebeb;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  padding-top: 20px;
  border-top: 1px solid #3d5c5c;

`;

const IntroductionContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color:  #e0ebeb
  ;
`;

