import React from "react";
import "./shop.style.scss";
import { useContext } from "react";
import { ProductsContext } from "../../context/product.context";
import ProductsCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Shop;
