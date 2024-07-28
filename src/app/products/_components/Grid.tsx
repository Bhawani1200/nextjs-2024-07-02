"use client";
import React, { useEffect } from "react";
import ProductCard from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "@/redux/products/productActions";
import { AppDispatch, RootState } from "@/redux/store";
import ProductsLoading from "../loading";
import { toast } from "react-toastify";
import { resetDeleteSuccess } from "@/redux/products/productSlice";
export default function ProductsGrid() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, products,deleteSuccess,query } = useSelector(
    (state: RootState) => state.product
  );
  useEffect(() => {
    dispatch(getAll(query));
  }, [dispatch,deleteSuccess,query]);
  if (loading) <ProductsLoading />;
  if (error) throw new Error(error);
  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 1400 });
    }
    if (deleteSuccess) {
      toast.success("Product deleted successfully", {
        autoClose: 1500,
        onClose:()=>dispatch(resetDeleteSuccess()),
      });
    }
  }, [error, deleteSuccess,dispatch]);

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
