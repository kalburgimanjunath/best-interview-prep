import { useSelector } from "react-redux";
import PRODUCTS from "../data/PRODUCTS";
import Card from "../components/features/banners/cards/card";
export default function Cart() {
  const cart = useSelector((state) => state.cart);

  const filterCart = PRODUCTS.filter((item) => {
    return cart.map((cartitem) => {
      return cartitem.id == item.id;
    });
  });
  return (
    <div>
      <h3>Cart</h3>
      {filterCart &&
        filterCart.map((item) => {
          return (
            <div>
              <Card itemId={item.id} title={item.title} image={item.image} />
            </div>
          );
        })}
    </div>
  );
}
