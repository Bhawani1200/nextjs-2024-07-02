"use client";
import React from "react";

export default function ProductsError(props: { error: Error }) {
  return (
    <div className="text-center text-red-600 text-xl">
      {props.error.message}
    </div>
  );
}
