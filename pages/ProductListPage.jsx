import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import "../styles/global.css";

const products = [
  {
    id: 1,
    name: "Blue Dream",
    price: 24.99,
    image: "/src/assets/plant1.jpg",
  },
  { id: 2, name: "Haze", price: 19.99, image: "/src/assets/plant2.jpg" },
  { id: 3, name: "Jack Herer", price: 29.99, image: "/src/assets/plant3.jpg" },
  {
    id: 4,
    name: "Kush",
    price: 14.99,
    image: "/src/assets/plant4.jpg",
  },
  { id: 5, name: "Skunk", price: 22.99, image: "/src/assets/plant5.jpg" },
  {
    id: 6,
    name: "Panama Red",
    price: 18.99,
    image: "/src/assets/plant6.jpg",
  },
];

const ProductListPage = () => {
  return (
    <>
      <Header />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductListPage;
