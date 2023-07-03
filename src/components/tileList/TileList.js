import React from "react";
import {Tile} from "../tile/Tile"

export const TileList = (props) => {
  return (
    <div>
      {props.arr.map(item => {
        return(<Tile 
          name={item.name}
          description={Object.values(item)}
        />)
      })}
    </div>
  );
};
