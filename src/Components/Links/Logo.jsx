import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <img className="w-[150px] h-[50px]" src="/assets/Logo.png" alt="logo" />
    </Link>
  );
};

export default Logo;
