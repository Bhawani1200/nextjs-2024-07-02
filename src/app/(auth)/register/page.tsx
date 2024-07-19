import Link from "next/link";
import React from "react";
import RegisterForm from "./_components/Register";
export default function Register() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center text-slate-700 font-semibold text-2xl">
        Register
      </h1>
      <div className="flex justify-center">
        <RegisterForm />
      </div>
      <div className="mt-5 text-center">
        Already have an account?
        <Link href={"/login"} className="text-blue-700 ml-2">
          Login
        </Link>
      </div>
    </div>
  );
}
