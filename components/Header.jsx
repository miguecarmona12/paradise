import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../src/context/CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <nav>
        <h1>Paradise</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({totalItems})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
