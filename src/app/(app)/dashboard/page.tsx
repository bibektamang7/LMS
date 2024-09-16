"use client";
import CoursesContent from "@/components/dashboard/CoursesContent";
import DashboardContent from "@/components/dashboard/DashboardContent";
import MentorsContent from "@/components/dashboard/MentorsContent";
import ReportsContent from "@/components/dashboard/ReportsContent";
import SettingsContent from "@/components/dashboard/SettingsContent";
import SideNav from "@/components/dashboard/SideNav";
import UsersContent from "@/components/dashboard/UsersContent";


import React, { useState } from "react";

type NavigationItem =
  | "Dashboard"
  | "Courses"
  | "Users"
  | "Mentors"
  | "Reports"
  | "Settings";



const AdminDashboard: React.FC = () => {
  const [selectedNav, setSelectedNav] = useState<NavigationItem>("Dashboard");
  
  // Content to display based on the selected navigation item
  const renderContent = () => {
    switch (selectedNav) {
      case "Dashboard":
        return <DashboardContent />;
      case "Courses":
        return <CoursesContent />;
      case "Users":
        return <UsersContent />;
      case "Mentors":
        return <MentorsContent />;
      case "Reports":
        return <ReportsContent />;
      case "Settings":
        return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen lg:flex-row flex-col">
      {/* Sidebar Navigation */}
      <SideNav selectedNav={ selectedNav} setSelectedNav={setSelectedNav} />

      {/* Main Content */}
      <main className="lg:w-4/5 p-6 bg-gray-100">{renderContent()}</main>
    </div>
  );
};

export default AdminDashboard;
