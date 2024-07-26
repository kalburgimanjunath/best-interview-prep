import { useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import Card from "./card";
import { useDispatch } from "react-redux";
import PRODUCTS from "../../../../data/PRODUCTS";
export default function ProductList() {
  const [items, setItems] = useState(PRODUCTS);
  const LeftArrow = () => {
    return <div></div>;
  };
  const RightArrow = () => {
    return <div></div>;
  };
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map((item) => (
        <Card
          item={item}
          type="product"
          //   selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
  );
}
