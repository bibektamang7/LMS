"use client";
import CoursesContent from "@/components/dashboard/CoursesContent";
import DashboardContent from "@/components/dashboard/DashboardContent";
import MentorsContent from "@/components/dashboard/MentorsContent";
import ReportsContent from "@/components/dashboard/ReportsContent";
import SettingsContent from "@/components/dashboard/SettingsContent";
import UsersContent from "@/components/dashboard/UsersContent";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type NavigationItem =
  | "Dashboard"
  | "Courses"
  | "Users"
  | "Mentors"
  | "Reports"
  | "Settings";

const navigationItems = [
  {
    title: "Dashboard",
    icon: "/icons/dashboard.png",
  },
  {
    title: "Courses",
    icon: "/icons/course.png",
  },
  {
    title: "Users",
    icon: "/icons/user.png",
  },
  {
    title: "Mentors",
    icon: "/icons/mentor.png",
  },
  {
    title: "Reports",
    icon: "/icons/report.png",
  },
  {
    title: "Settings",
    icon: "/icons/setting.png",
  },
];

const AdminDashboard: React.FC = () => {
  const [selectedNav, setSelectedNav] = useState<NavigationItem>("Dashboard");
  const theme = "light"
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
    <div className="flex h-screen ">
      {/* Sidebar Navigation */}
      <nav className="w-1/5 p-6 shadow-md flex justify-between flex-col ">
        <div>
          <Link
            href="/"
            className="flex mb-5 items-center border-b-2 pb-4"
          >
            <Image
              src="/images/logo1.png"
              alt="logo"
              width={65}
              height={65}
              className="object-contain"
            />
            <p className="logo_text text-2xl">StepOne</p>
          </Link>
          <ul className="space-y-4">
            {navigationItems.map((item, index) => (
              <li
                key={index}
                className="flex gap-2"
              >
                <Image
                  src={item.icon}
                  alt={`${item.title} icon in admin dashboard`}
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <span
                  className={`text-lg cursor-pointer font-[600] leading-[24px] ${
                    selectedNav === item.title
                      ? "text-indigo-600"
                      : "text-slate-400"
                  }`}
                  onClick={() =>
                    setSelectedNav(`${item.title}` as NavigationItem)
                  }
                >
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center px-1 py-2 bg-slate-200 text- rounded-sm">
            <div className={cn("py-2 flex-center gap-1 flex-1 rounded-sm", theme === "light" ? "bg-white" : "")}>
              <Image
                src="/icons/light.png"
                alt="light icon"
                width={20}
                height={20}
                className="object-contain"
              />
              <button className="text-sm font-[600]">Light</button>
            </div>
            <div className={cn(theme !== "light" ? "bg-white" : "", "py-2 flex-center flex-1 gap-1 rounded-sm")}>
              <Image
                src="/icons/moon.png"
                alt="moon icon"
                width={20}
                height={20}
                className="object-contain"
              />
              <button className="text-sm font-[600]">Dark</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-4/5 p-6 bg-gray-100">{renderContent()}</main>
    </div>
  );
};

export default AdminDashboard;
