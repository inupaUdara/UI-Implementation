"use client";
import React from "react";
import { LayoutDashboard, Bell, UserRound, ChevronDown } from "lucide-react";
import MobileSidebar from "./mobile-sidebar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex flex-col">
        <p className="text-sm"><span className="font-light">Welcome,</span> Moni Roy</p>
        <div className="flex items-center">
          <LayoutDashboard />
          <h1 className="ml-3 mr-3 font-semibold text-2xl">Dashboard</h1>
        </div>
      </div>
      <div className="flex w-full justify-end gap-3">
        <div className="bg-white w-12 h-12 flex items-center justify-center rounded-2xl border-2">
          <Bell size={19} />
        </div>
        <div className="flex bg-white h-12  border-2 rounded-2xl gap-2 items-center px-1 py-1">
          <div className="bg-[#1655FB] w-10 h-10 flex items-center justify-center rounded-2xl border-2 p-2">
            <UserRound size={18} color="white" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm">Moni Roy</p>
            <p className="text-xs">Admin</p>
          </div>
          <ChevronDown size={20} className="ml-4 mr-2" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
