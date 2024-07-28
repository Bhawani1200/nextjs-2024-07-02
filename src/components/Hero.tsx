"use client";
import { RootState } from "@/redux/rootReducer";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import iphone from "../assests/image/iphone.png";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  const { user, loading } = useSelector((state: RootState) => state.auth);

  if (loading) return <>Loading...</>;
  return (
    <div className="container mx-auto">
      <div className="flex min-h-svh items-center justify-evenly">
        <Image src={iphone} alt="iphone" />
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold uppercase text-black ">
            Up to 50% off
          </h1>
          <p className="my-5 ml-2  text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto
            quisquam voluptas nemo. Nobis mollitia quaerat alias, distinctio
          </p>
        </div>
      </div>
    </div>
  );
}
