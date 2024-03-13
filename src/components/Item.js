import React, {useState} from "react";

/*
1. create state to track if current item is in cart
2. create handler to toggle if item is in cart
3. attach handler to a click event for button
4. use state to inform class ("in-cart" or "") of li element
*/
function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  const handleClick = () => {
    setInCart(prev => !prev)
  }

  // DO NOT USE IF/ELSE IN JSX
  return (
    <li className={inCart ? "in-cart" : "" }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">
        {/* update text in button from 'Add to Cart' to 'Remove to Cart' */}
        { inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
