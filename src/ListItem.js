import React from "react";
import "./ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

function ListItem(props) {
  const items = props.items;
  const listItem = items.map((item) => {
    return(
    <FlipMove>
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.text}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => props.deleteItem(item.key)}
            />
          </span>
        </p>
      </div>
    </FlipMove>
    );
  });

  return <div>{listItem}</div>;
}

export default ListItem;
