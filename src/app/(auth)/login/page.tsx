import Link from "next/link";
import React from "react";
import LoginForm from "./_components/Form";

export default function Login() {
  return (
    <div className="container mx-auto py-8 justify-content-center">
      <h1 className="text-center text-slate-700 font-semibold text-3xl">
        Login
      </h1>
      <div className="flex justify-center">
        <LoginForm />
      </div>
      <div className="text-center mt-5">
        Does not have an account?
        <Link href={"/register"} className="text-blue-400">
          Sign up
        </Link>
      </div>
    </div>
  );
}
