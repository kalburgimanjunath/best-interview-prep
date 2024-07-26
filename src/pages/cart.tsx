import { useSelector } from "react-redux";
import PRODUCTS from "../data/PRODUCTS";
export default function Cart() {
  const cart = useSelector((state) => state.cart);

  const filterCart = PRODUCTS.filter((item) => {
    return cart.map((cartitem) => {
      return cartitem.id == item.id;
    });
  });
  console.log(filterCart);
  return (
    <div>
      <h3>Cart</h3>
      {filterCart &&
        filterCart.map((item) => {
          return <div>{item.title}</div>;
        })}
    </div>
  );
}
