"use client";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const BookNowBtn = ({ id }) => {
  const { data: session, status } = useSession();

  const isLogin = status === "authenticated";
  const router = useRouter();
  const path = usePathname();

  const handleBook = () => {
    if (isLogin) {
      router.push(`/booking/${id}`);
    } else {
      router.push(`/login?callbackUrl=/booking/${id}`);
    }
  };
  const isLoading = status === "loading";

  return (
    <div>
      <button
        onClick={handleBook}
        disabled={isLoading}
        className={`btn bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg transform transition ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Checking..." : "Book Now"}
      </button>
    </div>
  );
};

export default BookNowBtn;
