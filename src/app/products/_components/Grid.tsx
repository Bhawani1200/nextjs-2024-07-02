"use client";
import React, { useEffect } from "react";
import ProductCard from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "@/redux/products/productActions";
import { AppDispatch, RootState } from "@/redux/store";
import ProductsLoading from "../loading";
export default function ProductsGrid() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, products } = useSelector(
    (state: RootState) => state.product
  );
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);
  if (loading) <ProductsLoading />;
  if (error) throw new Error(error);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-4 gap-8 ">
      {products.map((product) => (
        <div className="cursor-pointer" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
