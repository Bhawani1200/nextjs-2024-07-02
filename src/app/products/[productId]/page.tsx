import { Metadata } from "next";
import React from "react";
import ProductCard from "../_components/Card";
type productByIdType = { params: { productId: string } };

export const generateMetadata = (props: productByIdType): Metadata => {
  return {
    title: `product ${props.params.productId}`,
  };
};
async function getProductById(id:string) {
  const products = await fetch(`http://localhost:3000/products/api/${id}`).then((data) =>
    data.json()
  );
  return products;
}
export default async function ProductById(props: productByIdType) {
  // if (props.params.productId > 1000) {
  //   notFound();
  // }
  const product=await getProductById(props.params.productId);
  return (
    <div className="container p-10">
      <ProductCard product={product} />
    </div>
  );
}
