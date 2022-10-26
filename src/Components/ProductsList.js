import React from "react";
import ProductsDetails from "./ProductsDetails";
import { useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";

const ProductsList = ({ products }) => {
  const { loading } = useSelector((state) => state.products);

  if (loading) {
    return (
      <div className="loading">
        <PulseLoader loading={loading} size={10} color={"#828aef"} />
      </div>
    );
  }

  return (
    <div className="ProductsList">
      {products.map((product) => (
        <ProductsDetails key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
