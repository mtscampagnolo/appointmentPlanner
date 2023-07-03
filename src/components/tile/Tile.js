import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{props.name}</p>
      {props.description.map((item, index) => {
        if(index === 0) {
          return
        }

        return(<p className="tile">{item}</p>)
      })}
    </div>
  );
};
