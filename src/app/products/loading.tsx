import React from "react";
import ProductLoadingCard from "./_components/loadingCard";

export default function ProductsLoading() {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-4 gap-8 ">
        <ProductLoadingCard />
        <ProductLoadingCard />
        <ProductLoadingCard />
        <ProductLoadingCard />
        <ProductLoadingCard />
        <ProductLoadingCard />
        <ProductLoadingCard />
        <ProductLoadingCard />
        <ProductLoadingCard />
        <ProductLoadingCard />
      </div>
    </div>
  );
}
