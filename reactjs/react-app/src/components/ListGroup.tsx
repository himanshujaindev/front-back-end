import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`; // react comppnent

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "yellow" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

interface ListItemProps {
  active: boolean;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedeIndex, setSelectedeIndex] = useState(0);
  // variable, updater fn = useState(defaultValue)

  return (
    // Fragment - To avoid additional node in DOM
    <>
      <h1> {heading} </h1>
      {items.length === 0 && <p>No items to display</p>}
      {/* <ul className="list-group"> */}
      <List>
        {items.map((item, index) => (
          // <li
          <ListItem
            active={index === selectedeIndex}
            // className={
            //   selectedeIndex == index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            key={item}
            onClick={() => {
              setSelectedeIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
      {/* </ul> */}
    </>
  );
}

export default ListGroup;
