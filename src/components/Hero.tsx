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
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-evenly py-28">
          <Image src={iphone} alt="iphone" />
          <div className="flex flex-col justify-center">
            <span className="ml-2 text-gray-500 mt-5">
              Black friday coming soon
            </span>
            <h1 className="text-5xl font-bold uppercase text-black ">
              Up to 50% off
            </h1>
            <p className="my-5 ml-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              iusto quisquam voluptas nemo. Nobis mollitia quaerat alias,
              distinctio
            </p>
            <div className="ml-2 pt-5">
              <Link
                href={"/products"}
                className="text-white bg-black uppercase px-5 py-2"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
