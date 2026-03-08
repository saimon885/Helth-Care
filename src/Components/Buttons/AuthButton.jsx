"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Swal from "sweetalert2";

const AuthButton = () => {
  const session = useSession();
  console.log(session);
  const handleLogOut = () => {
    const res = signOut({ redirect: false });
    if (res) {
      Swal.fire({
        title: "Logged out!",
        text: "You have been successfully logged out.",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });
    }
  };
  return (
    <div>
      {session?.status == "authenticated" ? (
        <div
          onClick={handleLogOut}
          className="btn bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg  transform transition"
        >
          LogOut
        </div>
      ) : (
        <Link
          href={"/login"}
          className="btn bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg  transform transition"
        >
          LogIn
        </Link>
      )}
    </div>
  );
};

export default AuthButton;
