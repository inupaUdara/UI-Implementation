"use client"

import React, { useState } from "react";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import Link from 'next/link'

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";

import loginImage from "../../public/login-image.png";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "600",
});

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
  return (
    <div className="w-full h-screen flex">
      <div className="hidden lg:relative md:w-1/2 lg:flex">
        <Image
          src={loginImage}
          alt="login"
          className="h-full w-full object-fill"
        />
      </div>
      <div className="flex flex-col w-full lg:w-1/2 justify-center items-center">
        <div className="min-w-[420px] p-10 lg:p-0">
          <h1 className={cn("text-center m-8 lg:text-3xl", orbitron.className)}>
            <span className="text-[#1655FB]">my</span>RealPage
          </h1>
          <p className="text-center m-8 font-bold text-2xl lg:text-3xl">
            Sign in to your account
          </p>
          <form action="">
            <div className="my-5">
              <label htmlFor="" className="font-semibold mb-2">
                Email Address
              </label>
              <Input placeholder="Email Address" className="mt-1" />
            </div>
            <div className="mt-5">
              <label htmlFor="" className="font-semibold">
                Password
              </label>
              <div className="relative">
              <Input type={showPassword ? "text" : "password"} placeholder="Password" className="mt-1"/>
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <Eye className="text-muted-foreground" size={20}/> : <EyeOff className="text-muted-foreground" size={20}/>}
              </div>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <Checkbox className="mr-1" /> <label className="text-sm">Remeber me</label>
              </div>
              <p className="text-[#1655FB] font-semibold cursor-pointer text-sm">Forgot Password?</p>
            </div>
            <Link href="/dashboard">
            <Button className="w-full rounded-full bg-[#1655FB] mt-5">
              Sign In
            </Button>
            </Link>
          </form>
          <p className="text-center mt-8">
            Don’t you have an account?{" "}
            <span className="text-[#1655FB] underline font-semibold cursor-pointer">
              Create an account
            </span>
          </p>
          <h2 className="underline text-center font-semibold mt-20 cursor-pointer">Need Help?</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
