import { useContext, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import Card from "./card";
import PRODUCTS from "../../../../data/PRODUCTS";
export default function ProductCrousal() {
  const [items, setItems] = useState(PRODUCTS);
  const handleClick = (id) => {};
  const LeftArrow = () => {
    const visibility = useContext(VisibilityContext);
    const isFirstItemVisible = visibility.useIsVisible("first", true);
    return (
      <div
        disabled={isFirstItemVisible}
        onClick={visibility.scrollPrev}
        className="left"
      >
        LEFT
      </div>
    );
  };
  const RightArrow = () => {
    const visibility = useContext(VisibilityContext);
    const isLastItemVisible = visibility.useIsVisible("last", false);
    return (
      <button
        disabled={isLastItemVisible}
        onClick={visibility.scrollNext}
        className="right"
      >
        RIGHT
      </button>
    );
  };
  const visibility = useContext(VisibilityContext);

  return (
    <ScrollMenu
      scrollContainerClassName=""
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
    >
      {items.map((item) => {
        // const visible = visibility.useIsVisible(item.id, true);
        return (
          item && (
            <div
              style={{
                width: "160px",
              }}
              tabIndex={0}
            >
              <Card
                key={item.id}
                item={item}
                type="product"
                //   selected={isItemSelected(id)}
              />
            </div>
          )
        );
      })}
    </ScrollMenu>
  );
}
