import { useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import Card from "./card";
import PRODUCTS from "../../../../data/PRODUCTS";
export default function ProductCrousal() {
  const [items, setItems] = useState(PRODUCTS);
  const handleClick = (id) => {};
  const LeftArrow = () => {
    return <div></div>;
  };
  const RightArrow = () => {
    return <div></div>;
  };
  return (
    <ScrollMenu
      scrollContainerClassName=""
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
    >
      {items.map(
        (item) =>
          item && (
            <Card
              key={item.id}
              item={item}
              type="product"
              //   selected={isItemSelected(id)}
            />
          )
      )}
    </ScrollMenu>
  );
}
