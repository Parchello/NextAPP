"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error("Logout failed");
    }
  };
  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-slate-600 text-white rounded py-2 px-4 font-bold mt-4"
      >
        Logout
      </button>
      <Toaster />
    </div>
  );
}
