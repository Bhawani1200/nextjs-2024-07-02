import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className="container mx-auto py-8 justify-content-center">
      <h1 className="text-center text-slate-700 font-semibold text-3xl">
        Login
      </h1>

      <div className="flex justify-center">
        <form className="w-1/2 mt-10">
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded py-3 px-3 border"
            />
            <p className="text-red-500 mt-2 ml-2"></p>
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded py-3 px-3 border"
            />
            <p className="text-red-500 mt-2 ml-2"></p>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-slate-700 rounded p-3 transition hover:bg-opacity-90"
          >
            Login
          </button>
          <p className="text-red-500 mt-2 text-center"></p>
        </form>
    </div>
        <div className="text-center mt-5">Does not have an account?
        <Link href={"/register"} className="text-blue-400">Sign up</Link>
        </div>
      </div>
  );
}
