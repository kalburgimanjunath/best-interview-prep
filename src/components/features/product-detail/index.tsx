import { useParams } from "react-router-dom";
import PRODUCTS from "../../../data/PRODUCTS";
export default function index() {
  const { id } = useParams();
  const DEFAULT_IMAGE =
    "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg";
  const onImageError = (e) => {
    e.target.src = DEFAULT_IMAGE;
  };
  const productItem = PRODUCTS.filter((item) => {
    return item.id == id;
  })[0];
  return (
    <div className="m-5 p-5 bg-green-300">
      <div>
        <img
          src={productItem.image ? productItem : DEFAULT_IMAGE}
          onError={onImageError}
          width={200}
        />
      </div>
      <div>{productItem.title}</div>
      <div>{productItem.description}</div>
    </div>
  );
}
