import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

const DashboardLayout = ({
    children
} : {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full relative bg-[#FAFBFC] overflow-y-scroll">
            <div className="hidden h-full md:flex md:w-60 md:flex-col md:fixed md:inset-y-0 z-[80] border-r-2 border border-gray-200 bg-white">
                <Sidebar/>
            </div>
            <main className="md:pl-60">
                <Navbar/>
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout;