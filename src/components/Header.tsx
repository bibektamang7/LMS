"use client";
import React, { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Info from "./widget/Info";
import { navItem_List } from "@/data/constant";

const Header = () => {
  const { data: session } = useSession();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
   useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setToggleProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <nav className="w-full h-[58px] xl:h-[102px] border-b-2">
      <div className="px-4 md:!px-6 max-w-[1248px] xl:!mx-auto py-3 relative">
        <div className="flex-between w-full">
          <Link
            href="/"
            className="flex gap-1 flex-center"
          >
            <Image
              src="/images/logo1.png"
              alt="logo"
              width={45}
              height={45}
              className="object-contain"
              loading='lazy'
            />
            <p className="logo_text">StepOne</p>
          </Link>

          <div className="px-4 md:!px-6 max-w-[1248px] xl:!mx-auto hidden relative py-2 lg:flex gap-2 text-gray-850 flex-wrap scroll-smooth justify-between">
            {navItem_List.map((item) => (
              <Link
                key={item.title}
                href={item.location}
                className="cursor-pointer inline-block font-semibold py-[9px] px-[17px] shrink-0"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile navigation */}
          <div className="lg:hidden flex ">
            <div className="flex-center gap-2">
              <Image
                src="/icons/search.png"
                alt="menu icon"
                width={20}
                height={20}
                className="object-contain cursor-pointer"
                loading='lazy'
              />
              {toggleMenu ? (
                <Image
                  src="/icons/cross.png"
                  alt="menu icon"
                  width={20}
                  height={20}
                  className="object-contain cursor-pointer"
                  onClick={() => setToggleMenu((prev) => !prev)}
                  loading='lazy'
                />
              ) : (
                <Image
                  src="/icons/menu.png"
                  alt="menu icon"
                  width={20}
                  height={20}
                  className="object-contain cursor-pointer"
                    onClick={() => setToggleMenu((prev) => !prev)}
                    loading='lazy'
                />
              )}
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="lg:flex hidden">
            {session?.user ? (
              <div className="flex-center gap-4">
                <Link href="/my-courses" className="text-gray-900 text-sm md:!text-base leading-[1px] md:!leading-6 font-bold cursor-pointer">
                  My Courses
                </Link>
                <div ref={profileRef}>
                  <Image
                    src={session?.user.image as string}
                    alt="profile Image"
                    width={30}
                    height={30}
                    onClick={() => setToggleProfile((prev) => !prev)}
                    className="w-10 h-10 rounded-full cursor-pointer hover:border-2 hover:border-indigo-200"
                    loading='lazy'
                  />
                  {toggleProfile && <Info setToggle={setToggleProfile} username={session.user.username!} isAdmin={ session.user.role === "admin" ? true : false} />}
                </div>
              </div>
            ) : (
              <div>
                <Link
                  href="/login"
                  className="button"
                >
                  Login/Register
                </Link>
              </div>
            )}
          </div>
        </div>
        {toggleMenu && (
          <div className="fixed z-50 w-full h-full bg-white left-0 [&>*]:px-4 [&>*]:pt-6 overflow-scroll pb-10 transition-all">
            {session?.user ? (
              <div className="flex-between pb-6 bg-gray-50">
                <div className="flex items-center gap-x-2">
                  <Image
                    src=""
                    alt="avatar"
                    width={40}
                    height={40}
                    className="object-contain"
                    loading='lazy'
                  />
                  <div>
                    <span className="text-primary-500 italic font-bold">
                      Hey
                    </span>
                    <br />
                    <span className="font-bold">{session.user.username}</span>
                  </div>
                </div>
                <Image
                  src="/icons/forward.png"
                  alt="forward icon"
                  width={15}
                  height={20}
                  className="object-contain"
                  loading='lazy'
                />
              </div>
            ) : (
              <div className="text-center mb-4">
                <Link
                  href="/login"
                  className="button"
                >
                  Login/Register
                </Link>
              </div>
            )}
            <ul className="list-none w-full !p-0">
              {navItem_List.map((item) => (
                <li className="flex hover:bg-gray-50 items-center px-4 py-4 select-none">
                  <Link
                    href={item.location}
                    className="inline-block w-full cursor-pointer flex-between"
                  >
                    <p className="text-gray-900 text-sm md:!text-base leading-[21px] md:!leading-6 font-normal">
                      {item.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
