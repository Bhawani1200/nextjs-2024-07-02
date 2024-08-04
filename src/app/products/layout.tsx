import { Metadata } from "next";
import React from "react";
import iphone from "../../assests/image/iphone.png";
import Image from "next/image";
export const metadata: Metadata = {
  title: "product layout",
};
export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-slate-600 h-52 mx-10 my-5 flex items-center justify-evenly">
          <h2 className="text-white text-3xl font-semibold">
            Save Upto <span className="text-5xl">60%</span>
            <p>
              <span className="text-white text-lg mr-3">Buy More</span>
              <span className="text-yellow-500 text-lg">Save More</span>
            </p>
          </h2>
          <Image src={iphone} alt="" height={200} className="" />
        </div>
      </div>
      {children}
    </>
  );
}
