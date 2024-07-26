import { useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import Card from "../banners/cards/card";

export default function TeamsCard({ title }) {
  const [items, setItems] = useState([
    { id: 1, title: "manju" },
    { id: 2, title: "shinu" },
    { id: 3, title: "krishna" },
  ]);
  const handleClick = (id) => {};
  const LeftArrow = () => {
    return <div></div>;
  };
  const RightArrow = () => {
    return <div></div>;
  };
  return (
    <>
      <div className="justify-center items-center font-bold p-2 text-2xl text-center">
        {title}
      </div>
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
    </>
  );
}
