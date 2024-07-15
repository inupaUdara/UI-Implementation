"use client";

import React from "react";
import Link from "next/link";
import { Orbitron } from "next/font/google";

import {
  Contact,
  LayoutDashboard,
  ListTodo,
  Megaphone,
  MessageCircleQuestion,
  Newspaper,
  Receipt,
  Settings,
} from "lucide-react";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "600",
});
const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Leads",
    icon: Contact,
    href: "/leads",
  },
  {
    label: "Marketing",
    icon: Megaphone,
    href: "/marketing",
  },
  {
    label: "Listings",
    icon: ListTodo,
    href: "/listings",
  },
  {
    label: "Billing",
    icon: Receipt,
    href: "/billing",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full">
      {/* main side bar items */}
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard">
          <h1
            className={cn(
              "text-center mt-2 mb-8 text-[#222222]",
              orbitron.className
            )}
          >
            <span className="text-[#1655FB]">my</span>RealPage
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-slate-100 rounded-2xl transition",
                pathname === route.href
                  ? "bg-[#1655FB] text-white hover:bg-[#1655FB]"
                  : ""
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className="w-5 h-5 mr-3" />
                {route.label}
              </div>
            </Link>
          ))}
          <hr></hr>
          <Link
            href="/news"
            className={cn(
              "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-slate-100 rounded-2xl transition",
              pathname === "/news"
                ? "bg-[#1655FB] text-white hover:bg-[#1655FB]"
                : ""
            )}
          >
            <div className="flex items-center flex-1">
              <Newspaper className="w-5 h-5 mr-3" />
              News
            </div>
          </Link>
        </div>
      </div>

      
      {/* support and setting section */}
      <div className="px-3 py-2">
        <div className="space-y-1">
          <hr></hr>
          <Link
            href="/support"
            className={cn(
              "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-slate-100 rounded-2xl transition",
              pathname === "/support"
                ? "bg-[#1655FB] text-white hover:bg-[#1655FB]"
                : ""
            )}
          >
            <div className="flex items-center flex-1">
              <MessageCircleQuestion className="w-5 h-5 mr-3" />
              Support
            </div>
          </Link>
          <Link
            href="/setting"
            className={cn(
              "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-slate-100 rounded-2xl transition",
              pathname === "/setting"
                ? "bg-[#1655FB] text-white hover:bg-[#1655FB]"
                : ""
            )}
          >
            <div className="flex items-center flex-1">
              <Settings className="w-5 h-5 mr-3" />
              Setting
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
