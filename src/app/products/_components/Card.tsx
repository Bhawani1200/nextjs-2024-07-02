"use client";
import Product from "@/types/product";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import headphone from "../../../assests/image/headphone.webp";

const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();

  if (!product?.name) throw new Error("Product not found!");
  function onClick(id?: string) {
    router.push(`/products/${id}`);
  }
  
  return (
    <div className="py-5 h-full border border-dashed border-gray-800">
      <div className="flex justify-center mb-5">
        <Image src={headphone} alt="" height={200} className="" />
      </div>
      <p className="text-center font-semibold text-lg">$ {product?.price}</p>
      <p className="text-center font-semibold text-xl">{product?.name}</p>
      <p className="text-center">{product?.brand}</p>
      <p className="text-center">{product?.category}</p>
   <div className="flex justify-around items-center mt-3">
   <button
          className="bg-black text-white px-3 py-1"
          // onClick={() => onClick(product?.id)}
        >
          Buy Now
        </button>
   </div>
    </div>
  );
};

export default ProductCard;
