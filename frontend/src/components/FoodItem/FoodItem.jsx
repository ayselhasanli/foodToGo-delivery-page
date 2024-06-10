import { StoreContext } from "../../context/StoreContext";
import "./FoodItem.css";
import { useContext, useState } from "react";

const FoodItem = ({ id, name, price, description, img, rating }) => {
  const [totalStars, setTotalStars] = useState([1, 2, 3, 4, 5]);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img src={img} className="food-item-image" alt="food-item-image" />
        {!cartItems[id] ? (
          <button className="add-food-item" onClick={() => {
            addToCart(id);
          }}>
            <i className="fa-solid fa-plus"></i>
          </button>
        ) : (
          <div className="food-item-counter">
            <button
              className="remove-counter"
              onClick={() => removeFromCart(id)}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
            <p>{cartItems[id]}</p>
            <button className="add-counter" onClick={() => addToCart(id)}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <div>
            {totalStars.map((star) => {
              return rating >= star ? (
                <i className="fa-solid fa-star food-item-rate"></i>
              ) : (
                <i className="fa-regular fa-star food-item-rate"></i>
              );
            })}
          </div>
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
