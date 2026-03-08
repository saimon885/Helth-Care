"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import AuthButton from "@/Components/Buttons/AuthButton";
import Logo from "@/Components/Links/Logo";
import NavLink from "@/Components/Links/NavLink";

const Navbar = () => {
  const { status } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    ...(status === "authenticated" ? [{ name: "Dashboard", href: "/dashboard" }] : []),
  ];

  const Links = (
    <>
      {navLinks.map((link) => (
        <li key={link.href}>
          <NavLink href={link.href}>{link.name}</NavLink>
        </li>
      ))}
    </>
  );

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
        ? "bg-base-100/80 backdrop-blur-md shadow-sm border-b border-base-300" 
        : "bg-base-100 border-b border-transparent"
      }`}
    >
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border border-base-200"
            >
              {Links}
            </ul>
          </div>
          <Logo />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">
            {Links}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <AuthButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;