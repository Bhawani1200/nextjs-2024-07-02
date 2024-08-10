import Hero from "@/components/Hero";
import AuthLayout from "./layouts/AuthLayout";
import ProductsGrid from "./products/_components/Grid";
import Features from "@/components/Features";
import electronics from "../assests/image/electronics.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <AuthLayout>
      <Hero />
      <Features />
      <div className="bg-white py-20">
        <div className="container mx-auto  ">
          <h2 className="text-center text-5xl font-semibold my-5 mb-10 text-black">
            OUR PRODUCTS
          </h2>
          <ProductsGrid />
        </div>
        <div className="fixed top-0 left-0 -z-10">
          <Image src={electronics} alt="electronics" />
        </div>
      </div>
    </AuthLayout>
  );
}
