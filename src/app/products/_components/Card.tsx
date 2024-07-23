"use client";
import React, { useEffect } from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import { useRouter } from "next/navigation";
import headphone from "../../../assests/image/headphone.webp";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { removeProduct } from "@/redux/products/productActions";
const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
 
  function onClick(id?: string) {
    router.push(`/products/${id}`);
  }
  async function onDeleteProduct(id?: string) {
    dispatch(removeProduct(id));
  }
  
  if (!product?.name) throw new Error("Product not found");
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
          onClick={() => onClick(product?.id)}
        >
          Buy Now
        </button>
        <button
          className="bg-red-600 text-white ml-3 rounded p-2"
          onClick={() => onDeleteProduct(product.id ?? "")}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
// function dispatch(arg0: unknown) {
//   throw new Error("Function not implemented.");
// }
