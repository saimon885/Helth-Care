import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialButton = () => {
  const path = useSearchParams()
  const handleLogin = async () => {
    const result = await signIn("google", {
      callbackUrl: path.get("callbackUrl") || "/",
      redirect: false,
    });
    if (result?.ok) {
      alert("googleLogin success");
    }
  };
  return (
    <button
      onClick={handleLogin}
      className="btn w-full border border-gray-300 flex items-center gap-2 justify-center"
    >
      <FcGoogle size={22} />
      Continue with Google
    </button>
  );
};

export default SocialButton;
