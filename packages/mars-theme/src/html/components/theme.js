import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Page404 from "./page404.js";
import Introduction from "./introduction";
import HeaderImage from "./headerImage";

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const Theme = ({ state }) => (
  <>
    <HeaderImage />
    <Head>
      <title>{state.frontity.title}</title>
      <html lang="en" />
    </Head>
    <Global styles={globalStyles} />
    <HeadContainer>
      <Header />
    </HeadContainer>
    <BodyContainer>
      <Body>
        
        {state.source.data(state.router.path).isArchive && <List />}
        {state.source.data(state.router.path).isPostType && <Post />}
        {state.source.data(state.router.path).is404 && <Page404 />}
        
      </Body>
      <IntroductionContainer>
        <Introduction />
      </IntroductionContainer>
    </BodyContainer>
    
      
  
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
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: auto auto auto;

`;

const IntroductionContainer = styled.div`
  
  width: 30%;
  margin: 1.66%;

`;

  const BodyContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
`;
