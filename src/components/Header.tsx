"use client";
import navLinks from "@/constants/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const authToken = localStorage.getItem("authToken");

  const isAuthenticated = authToken ? true : false;

  const logout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  return (
    <header className="w-full text-gray-700  shadow-sm body-font">
      <div className="container flex flex-col items-start p-6 mx-auto md:flex-row">
        <div className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          LOGO
        </div>

        <nav className="flex items-center justify-center text-base md:ml-auto">
          {navLinks.map((navLink) => {
            const isActive =
              navLink.href === "/"
                ? pathname === navLink.href
                : pathname.startsWith(navLink.href);

            if (isAuthenticated === navLink.auth)
              return (
                <Link
                  key={navLink.href}
                  href={navLink.href}
                  className={`mr-5 font-medium hover:text-blue-300 ${
                    isActive ? "text-red-700" : ""
                  }`}
                >
                  {navLink.name}
                </Link>
              );
          })}
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="bg-slate-700 rounded text-white px-3 py-1"
            >
              Logout
            </button>
          ) : null}
        </nav>
      </div>
    </header>
  );
};

export default Header;
