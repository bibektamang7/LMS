"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import SearchBar from "./ui/SearchBar";

const Header = () => {
  const isLoggedIn = false;
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleSearch = (query: string) => {
    // TODO:searching functionality
  };

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
            />
            <p className="logo_text">StepOne</p>
          </Link>

          <div className="px-4 md:!px-6 max-w-[1248px] xl:!mx-auto hidden relative py-2 lg:flex gap-2 text-gray-850 flex-wrap scroll-smooth justify-between">
            <Link
              href="/"
              className="cursor-pointer inline-block font-semibold py-[9px] px-[17px] shrink-0"
            >
              Courses
            </Link>
            <Link
              href="/"
              className="cursor-pointer inline-block font-semibold py-[9px] px-[17px] shrink-0"
            >
              About Us
            </Link>
            <Link
              href="/"
              className="cursor-pointer inline-block font-semibold py-[9px] px-[17px] shrink-0"
            >
              Support System
            </Link>
            <Link
              href="/"
              className="cursor-pointer inline-block font-semibold py-[9px] px-[17px] shrink-0"
            >
              Become an affiliate
            </Link>
            <Link
              href="/"
              className="cursor-pointer inline-block font-semibold py-[9px] px-[17px] shrink-0"
            >
              Instructors
            </Link>
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
              />
              {toggleMenu ? (
                <Image
                  src="/icons/cross.png"
                  alt="menu icon"
                  width={20}
                  height={20}
                  className="object-contain cursor-pointer"
                  onClick={() => setToggleMenu((prev) => !prev)}
                />
              ) : (
                <Image
                  src="/icons/menu.png"
                  alt="menu icon"
                  width={20}
                  height={20}
                  className="object-contain cursor-pointer"
                  onClick={() => setToggleMenu((prev) => !prev)}
                />
              )}
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="lg:flex hidden">
            {isLoggedIn ? (
              <div className="flex-center gap-4">
                <p className="text-gray-900 text-sm md:!text-base leading-[1px] md:!leading-6 font-bold cursor-pointer">
                  My Courses
                </p>
                <Image
                  src="/images/mainImg.avif"
                  alt="profile Image"
                  width={30}
                  height={30}
                  className="w-10 h-10 rounded-full cursor-pointer hover:border-2 hover:border-indigo-200"
                />
              </div>
            ) : (
              <div>
                <Link
                  href="/login"
                  className="button mt-9 self-start w-full lg:!w-fit"
                >
                  Login/Register
                </Link>
              </div>
            )}
          </div>
        </div>
        {toggleMenu && (
          <div className="fixed z-50 w-full h-full bg-white left-0 [&>*]:px-4 [&>*]:pt-6 overflow-scroll pb-10 transition-all">
            {isLoggedIn ? (
              <div className="flex-between pb-6 bg-gray-50">
                <div className="flex items-center gap-x-2">
                  <Image
                    src=""
                    alt="avatar"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <div>
                    <span className="text-primary-500 italic font-bold">
                      Hey
                    </span>
                    <br />
                    <span className="font-bold">Bibek</span>
                  </div>
                </div>
                <Image
                  src="/icons/forward.png"
                  alt="forward icon"
                  width={15}
                  height={20}
                  className="object-contain"
                />
              </div>
            ) : (
              <Button className="bg-indigo-700">Login / register</Button>
            )}
            <ul className="list-none w-full !p-0">
              <li className="flex hover:bg-gray-50 items-center px-4 py-4 select-none">
                <Link
                  href="/"
                  className="inline-block w-full cursor-pointer flex-between"
                >
                  <p className="text-gray-900 text-sm md:!text-base leading-[21px] md:!leading-6 font-normal">
                    Courses
                  </p>
                  <Image
                    src="/icons/forward.png"
                    alt="forward icon"
                    width={13}
                    height={17}
                    className="object-contain"
                  />
                </Link>
              </li>
              <li className="flex hover:bg-gray-50 items-center px-4 py-4 select-none">
                <Link
                  href="/"
                  className="inline-block w-full cursor-pointer"
                >
                  <p className="text-gray-900 text-sm md:!text-base leading-[21px] md:!leading-6 font-normal">
                    One Neuron
                  </p>
                </Link>
              </li>
              <li className="flex hover:bg-gray-50 items-center px-4 py-4 select-none">
                <Link
                  href="/"
                  className="inline-block w-full cursor-pointer"
                >
                  <p className="text-gray-900 text-sm md:!text-base leading-[21px] md:!leading-6 font-normal">
                    Support System
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/* <Button className="bg-indigo-700">Login / register</Button> */}
    </nav>
  );
};

export default Header;
