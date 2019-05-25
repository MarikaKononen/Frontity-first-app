import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    
    <Container>
      <FeaturedMedia id={item.featured_media} />
      <Author>
        By <b>{author.name}</b>
      </Author>
      <Fecha>
        {" "}
        on <b>{date.toDateString()}</b>
      </Fecha>
      <Link path={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>
      
      
    </Container>
    
  );
};

export default connect(Item);


const Container = styled.li`
  text-align: center;
  margin: 10px;
  padding: 0 15px;
  border: 1px solid #ccc;
  float: left;
  background-color: #f0f5f5;
  border-radius: 15px;
  width: 25%;
  
`;

const Title = styled.h1`
  color: rgba(12, 17, 43);
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 1.2rem;
  min-height:120px;
`;

const Author = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

const Fecha = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  font-size: 0.8rem;
`;
