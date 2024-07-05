import { Metadata } from "next";
import React from "react";
export const metadata:Metadata={
    title:"product layout"
}
export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
  <div>Product Layout page</div>
  {children}
  </>;
}
