import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/data/constant";

function SideNav() {
  const theme = "light";
  return (
    <nav className="lg:w-1/5 hidden p-6 shadow-md md:flex justify-between flex-col ">
      <div>
        <ul className="space-y-4">
          {navigationItems.map((item, index) => (
            <Link
              href={item.redirect}
              key={index}
              className="flex gap-2"
            >
              <Image
                src={item.icon}
                alt={`${item.title} icon in admin dashboard`}
                width={20}
                height={20}
                className="object-contain"
                loading='lazy'
              />
              <span
                className={`text-lg cursor-pointer font-[600] leading-[24px]`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <div className="flex items-center px-1 py-2 bg-slate-200 text- rounded-sm">
          <div
            className={cn(
              "py-2 flex-center gap-1 flex-1 rounded-sm",
              theme === "light" ? "bg-white" : ""
            )}
          >
            <Image
              src="/icons/light.png"
              alt="light icon"
              width={20}
              height={20}
              className="object-contain"
              loading='lazy'
            />
            <button className="text-sm font-[600]">Light</button>
          </div>
          <div
            className={cn(
              theme !== "light" ? "bg-white" : "",
              "py-2 flex-center flex-1 gap-1 rounded-sm"
            )}
          >
            <Image
              src="/icons/moon.png"
              alt="moon icon"
              width={20}
              height={20}
              className="object-contain"
              loading='lazy'
            />
            <button className="text-sm font-[600]">Dark</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SideNav;
