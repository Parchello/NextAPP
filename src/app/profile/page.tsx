"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ProfilePage() {
  const [data, setData] = useState("");
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

  const getUserDetails = async () => {
    const res = await axios.get("api/users/me");
    console.log(res);
    setData(res.data.data.username);
  };

  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <h2 className="bg-green-500 ">
        {data === "" ? (
          "No data"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-slate-600 text-white rounded py-2 px-4 font-bold mt-4"
      >
        Logout
      </button>
      <button
        onClick={getUserDetails}
        className="bg-purple-500 hover:bg-slate-600 text-white rounded py-2 px-4 font-bold mt-4"
      >
        Get user details
      </button>
      <Toaster />
    </div>
  );
}
