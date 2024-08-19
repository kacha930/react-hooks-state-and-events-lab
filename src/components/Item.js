import React, { useState } from "react";

function Item({ name, category }) {
  // Step 1: Create state variable to track if the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Step 2: Define the event handler for toggling the cart status
  const toggleCartStatus = () => {
    setIsInCart(prevState => !prevState);
  };

  // Step 3: Conditionally set the className and button text based on state
  const liClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Step 4: Attach the event handler to the button */}
      <button className="add" onClick={toggleCartStatus}>{buttonText}</button>
    </li>
  );
}

export default Item;