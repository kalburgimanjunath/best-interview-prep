import { Link } from "react-router-dom";

export default function Navbar() {
  const items = [
    { id: 1, title: "home", link: "home" },
    { id: 2, title: "products", link: "products" },
    { id: 3, title: "cart", link: "cart" },
  ];
  return (
    <div className="flex bg-pink-200 w-full justify-between ">
      {items &&
        items.map((item) => {
          return (
            <div
              key={item.id}
              className="p-2 font-bold hover:bg-pink-400 cursor-pointer"
            >
              <Link to={item.link}>{item.title.toUpperCase()}</Link>
            </div>
          );
        })}
    </div>
  );
}
