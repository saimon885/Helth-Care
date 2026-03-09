"use client";
import { CreateUser } from "@/app/action/server/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const RegisterCard = () => {
  const [show, setShow] = useState(false);
  const router = useRouter()
  const handlesubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const nid = form.nid.value;
    const name = form.name.value;
    const phone = form.number.value;
    const email = form.email.value;
    const password = form.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 6 characters with 1 uppercase and 1 lowercase letter.",
      });
      return;
    } else {
      const newData = {
        nid,
        name,
        phone,
        email,
        password,
      };

      const result = await CreateUser(newData);

      if (result?.acknowledged) {
        Swal.fire({
          title: "Registration Successful 🎉",
          text: "Your account has been created successfully. You can now start using our care services.",
          icon: "success",
          confirmButtonText: "Continue",
          confirmButtonColor: "#3b82f6",
          background: "#ffffff",
          color: "#1f2937",
          iconColor: "#3b82f6",
          timer: 2500,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then(() => {
          router.push("/login");
        });
      } else {
        Swal.fire({
          title: "Already Account Is Created.. please LogIn!",
          icon: "error",
          timer: 2500,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Register to access our services
        </p>

        <form onSubmit={handlesubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600">
              NID Number
            </label>
            <input
              type="text"
              name="nid"
              placeholder="Enter your NID"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

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
              Contact Number
            </label>
            <input
              type="tel"
              name="number"
              placeholder="Enter your phone number"
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
                placeholder="Create a password"
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

          <input
            className="btn bg-gradient-to-r from-primary to-secondary  font-medium shadow-lg transform transition w-full text-white"
            type="submit"
            value="Register"
          />
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link
            href={"/login"}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterCard;
