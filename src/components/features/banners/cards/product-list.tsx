import { useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import Card from "./card";

export default function ProductList() {
  const [items, setItems] = useState([
    { id: 1, title: "product1" },
    { id: 2, title: "product2" },
    { id: 3, title: "product3" },
    { id: 4, title: "product4" },
    { id: 5, title: "product5" },
    { id: 6, title: "product6" },
  ]);
  const handleClick = (id) => {};
  const LeftArrow = () => {
    return <div></div>;
  };
  const RightArrow = () => {
    return <div></div>;
  };
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map(({ id, title }) => (
        <Card
          itemId={id} // NOTE: itemId is required for track items
          title={title}
          key={id}
          onClick={handleClick(id)}
          //   selected={isItemSelected(id)}
        />
      ))}
    </ScrollMenu>
  );
}
