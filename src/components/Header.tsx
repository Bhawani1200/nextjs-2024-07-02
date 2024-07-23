"use client";
import navLinks from "@/constants/navlinks";
import { logout } from "@/redux/auth/authSlice";
import { AppDispatch, RootState } from "@/redux/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const logoutUser = () => {
    dispatch(logout());
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
              onClick={logoutUser}
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
