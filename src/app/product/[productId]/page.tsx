import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import ProductCard from "../_components/Card";
type productByIdType = { params: { productId: string } };

export const generateMetadata = (props: productByIdType): Metadata => {
  return {
    title: `product ${props.params.productId}`,
  };
};
export default function ProductById(props: productByIdType) {
  // if (props.params.productId > 1000) {
  //   notFound();
  // }
  return (
    <div className="container p-10">
      <ProductCard id={props.params.productId} />
    </div>
  );
}
