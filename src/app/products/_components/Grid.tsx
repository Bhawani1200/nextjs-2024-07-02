"use client";
import { Product } from "@/types/product";
import React from "react";
import ProductCard from "./Card";
import { useRouter } from "next/navigation";
export default function ProductsGrid({ products }: { products: Product[] }) {
  const router = useRouter();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-4 gap-8 ">
      {products.map((product) => (
        <div className="cursor-pointer">
          <ProductCard key={product.id} product={product} />
        </div>
      ))}
    </div>
  );
}
