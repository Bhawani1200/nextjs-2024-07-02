import React from "react";
import products from "../data";

const ProductCard = ({ id }: { id: string }) => {
  const product = products.find((product) => product.id === id);
  return (
     <div className="px-5 py-3 rounded max-w-fit bg-slate-200">
      <p>Name:{product?.name}</p>
      <p>Brand:{product?.brand}</p>
      <p>Category:{product?.category}</p>
      <p>Price:{product?.price}</p>
     </div>
  );
};

export default ProductCard;
