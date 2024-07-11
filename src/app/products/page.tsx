import React from "react";
import ProductsTable from "./_components/Table";
import { getALlProducts } from "@/api/product";

import ProductsGrid from "./_components/Grid";

export default async function ProductPage() {
  const products = await getALlProducts();
  return (
    <div className="container mx-auto">
      {/* <ProductsTable products={products} /> */}
      <ProductsGrid products={products} />
    </div>
  );
}
