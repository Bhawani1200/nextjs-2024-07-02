"use client";
import { RootState } from "@/redux/rootReducer";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "./Modal";

export default function Hero() {
  const { user, loading } = useSelector((state: RootState) => state.auth);

  if (loading) return <>Loading...</>;
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-semibold text-slate-600 mt-8">
        Welcome {user?.name}
      </h1>
    </div>
  );
}
