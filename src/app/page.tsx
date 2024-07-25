import Hero from "@/components/Hero";
import Modal from "@/components/Modal";
import AuthLayout from "./layouts/AuthLayout";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-slate-600 text-3xl font-semibold mt-8">
        <AuthLayout>
          <Hero />
       
        </AuthLayout>
      </h1>
      ;
    </div>
  );
}
