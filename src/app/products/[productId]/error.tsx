"use client";
import React from "react";

export default function ProductError(props: { error: Error }) {
  return (
    <div className="text-center text-red-600 text-xl">{props.error.message}</div>
  );
}