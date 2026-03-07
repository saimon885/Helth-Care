import Logo from "@/Components/Links/Logo";
import NavLink from "@/Components/Links/NavLink";
import Link from "next/link";
import React from "react";
const Navbar = () => {
  const Links = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/services"}>services</NavLink>
      </li>
      <li>
        <NavLink href={"/dashboard"}>dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 border-b border-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm z-15 dropdown-content bg-base-100 text-[16px] rounded-box  mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <div>
          <Logo></Logo>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px] ">{Links}</ul>
      </div>
      <div className="navbar-end">
        <Link
          href={"/login"}
          className="btn bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg  transform transition"
        >
          LogIn
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
