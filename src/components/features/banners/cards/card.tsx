import { useDispatch } from "react-redux";
import { addToCart } from "../../../../store/cartSlice";
import { Link } from "react-router-dom";

const Card = ({ item, type }) => {
  console.log(item);
  const dispatch = useDispatch();
  const DEFAULT_IMAGE =
    "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg";
  const onImageError = (e) => {
    e.target.src = DEFAULT_IMAGE;
  };
  return (
    <div className="bg-blue-50 p-2 w-full">
      <Link to={`/product-detail/${item?.id}`}>
        <img
          src={item?.image ? item?.image : DEFAULT_IMAGE}
          onError={onImageError}
          width={200}
          height={200}
        />
        <div>{item?.title}</div>
      </Link>
      {item && type == "product" && (
        <div>
          <button
            className="bg-blue-200 rounded-lg"
            onClick={() => dispatch(addToCart(item.id))}
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};
export default Card;
