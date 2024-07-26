import { useDispatch } from "react-redux";
import { addToCart } from "../../../../store/cartSlice";

const Card = ({ itemId, title }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-blue-50 p-2 w-3/4">
      <img src="https://picsum.photos/seed/picsum/200/300" />
      <div>{title}</div>
      <div>
        <button
          className="bg-blue-200 rounded-lg"
          onClick={() => dispatch(addToCart(itemId))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Card;
