import React from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";

const Info = ({ username }: { username: string }) => {
  const isAdmin = true;
  return (
    <div className="absolute bg-white top-14 w-48 -right-[4.8rem] shadow-light z-[9998]">
      <ul className="[&>li]:mb-3 text-gray-650 [&>li]:cursor-pointer !m-0 menu-dropdown">
        <li className="mx-5 my-2 border-b">
          <span className="text-primary-500 italic font-bold">Hey</span>
          <br />
          <span className="font-bold">{username}</span>
        </li>
        <Link href="/my-courses" className="hover:bg-gray-100 px-5 py-2 flex gap-x-4 !m-0 items-center">
          <Image
            src="/icons/course.png"
            alt="course Icon"
            width={25}
            height={25}
            className="object-contain"
          />
          <span>My Courses</span>
        </Link>
        {isAdmin && (
          <Link href="/dashboard" className="hover:bg-gray-100 px-5 py-2 flex gap-x-4 !m-0 items-center">
            <Image
              src="/icons/dashboard.png"
              alt="course Icon"
              width={25}
              height={25}
              className="object-contain"
            />
            <span>Dashboard</span>
          </Link>
        )}
        <Link href="/profile" className="hover:bg-gray-100 px-5 py-2 flex gap-x-4 !m-0 items-center">
          <Image
            src="/icons/person.png"
            alt="course Icon"
            width={25}
            height={25}
            className="object-contain"
          />
          <span>My Profile</span>
        </Link>
        <li
          onClick={async () => {
            await signOut();
          }}
          className="hover:bg-gray-100 px-5 py-2 flex gap-x-4 !m-0 items-center"
        >
          <Image
            src="/icons/logout.png"
            alt="course Icon"
            width={25}
            height={25}
            className="object-contain"
          />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Info;
