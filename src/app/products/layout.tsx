import { Metadata } from "next";
import React from "react";
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
      <div className="text-center text-3xl my-8">Product Page</div>
      {children}
    </>
  );
}
