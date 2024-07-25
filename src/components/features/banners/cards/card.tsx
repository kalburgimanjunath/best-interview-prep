const Card = ({ itemId, title }) => {
  return (
    <div className="bg-blue-50 p-2 w-3/4">
      <img src="https://picsum.photos/seed/picsum/200/300" />
      <div>{title}</div>
      <div>
        <button className="bg-blue-200 rounded-lg">Add to Cart</button>
      </div>
    </div>
  );
};
export default Card;
