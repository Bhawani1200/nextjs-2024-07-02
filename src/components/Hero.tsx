"use client";
import { RootState } from "@/redux/rootReducer";
import React from "react";
import { useSelector } from "react-redux";

export default function Hero() {
  const { user } = useSelector((state: RootState) => state.auth);
  return <div>Welcome {user?.name}</div>;
}
