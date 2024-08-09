import Hero from "@/components/Hero";
import Modal from "@/components/Modal";
import AuthLayout from "./layouts/AuthLayout";
import ProductsGrid from "./products/_components/Grid";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-slate-600 text-3xl font-semibold mt-8">
        <AuthLayout>
          <Hero />
          <Features/>
          <div className="container mx-auto py-20">
            <h2 className="text-center text-5xl font-semibold my-5">
              OUR PRODUCTS
            </h2>
            <ProductsGrid />
          </div>
        </AuthLayout>
      </h1>
      ;
    </div>
  );
}
