import React from "react";
import { connect, styled } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.data(state.router.path);
  // Get the items of the current page.
  const items = data.pages[state.router.page];

  return items ? (
    <div>
    <Container>
      <Pagination />

      {data.isTaxonomy && (
        <Taxonomy>
          {data.taxonomy}: {state.source[data.taxonomy][data.id].name}
        </Taxonomy>
      )}
      {items.map(({ type, id }) => {
        const item = state.source[type][id];
        // Render one Item for each one.
        return <Item key={item.id} item={item} />;
      })}
      
    </Container>
    </div>
  ) : null;
};

export default connect(List);

const Container = styled.ul`
  margin: 0;
  list-style: none;
`;

const Taxonomy = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
