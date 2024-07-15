import { Metadata } from "next";
import React from "react";
import ProductCard from "../_components/Card";
import { getProductById } from "@/api/product";
import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";
import headphone from "../../../assests/image/headphone.webp";
type productByIdType = { params: { productId: string } };

export const generateMetadata = (props: productByIdType): Metadata => {
  return {
    title: `product ${props.params.productId}`,
  };
};

export default async function ProductById(props: productByIdType) {
  // if (props.params.productId > 1000) {
  //   notFound();
  // }
  const product = await getProductById(props.params.productId);
  return (
    <div className="container mx-auto mt-15">
      <div className="flex justify-between py-12 mt-6 ">
        <div className=" flex justify-center p-5">
          <Image src={headphone} alt="" className="w-2/3 h-auto border p-5" />
        </div>
        <div className="w-2/3 ">
          <h2 className="text-3xl font-bold mb-5">{product.name}</h2>
          <p className="text-gray-500">{product.brand}</p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            doloribus explicabo accusamus quibusdam asperiores sapiente at
            assumenda excepturi culpa obcaecati error ipsam temporibus minima
            perferendis voluptatum laborum omnis ipsa hic ut, fugit itaque
            neque. Alias labore nobis voluptatibus autem doloribus magnam
            delectus, officia ipsum reprehenderit placeat quo porro quae
            tempore?
          </p>
          <h3 className="text-2xl text-red-600 my-8">
            ${product.price}
            <span className="text-2xl text-black ml-3 line-through">
              ${product.price / 0.8}
            </span>
          </h3>
          <hr />
          <div className="pt-8 flex">
            <FaStar className="text-xl  text-yellow-300" />
            <FaStar className="text-xl  text-yellow-300" />
            <FaStar className="text-xl  text-yellow-300" />
            <FaStar className="text-xl  text-yellow-300" />
            <FaStarHalf className="text-xl  text-yellow-300" />
            <p className="font-serif">2000+ reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}
