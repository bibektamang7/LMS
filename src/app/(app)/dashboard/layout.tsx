import React from "react";
import SideNav from "@/components/dashboard/SideNav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[100vh] flex gap-4 py-8">
        <SideNav/>
        {children}
    </div>
  );
};

export default layout;
