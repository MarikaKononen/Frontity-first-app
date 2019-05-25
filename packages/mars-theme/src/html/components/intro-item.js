import React from "react";
import { connect, styled } from "frontity";
import List from "./list";

const IntroItem = () => {
  return  (
    <Container>

        <h1>Placeholder</h1>
        <p>This is a test content</p>

    </Container>
  ) 
};

export default connect(IntroItem);

const Container = styled.div`
  border: 1px solid #3d5c5c;    
  width: 100%;
  border-radius: 15px;
  padding: 10px;
  background-color: #f0f5f5;
`;

const Head = styled.div``;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
`;



const Body = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);

  * {
    max-width: 100%;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px 0;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }
`;
