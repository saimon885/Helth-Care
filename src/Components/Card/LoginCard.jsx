"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import SocialButton from "../Buttons/SocialButton";
import { useRouter, useSearchParams } from "next/navigation";

const LoginCard = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const result = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
    if (!result.ok) {
      Swal.fire({
        title: "Error!",
        text: "Invalid Credantials!",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Success!",
        text: "Login Successfully",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        router.push(params.get("callbackUrl") || "/");
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">Login to your account</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              Password
            </label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none pr-10"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-3 top-4 cursor-pointer text-gray-500"
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="btn bg-gradient-to-r from-primary to-secondary  font-medium shadow-lg transform transition w-full text-white"
          >
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        <SocialButton></SocialButton>
        <p className="text-center text-sm text-gray-500 mt-4">
          Dont have an account?
          <Link
            href={"/register"}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginCard;
