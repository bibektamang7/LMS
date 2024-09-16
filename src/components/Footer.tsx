import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="mt-16">
      <footer
        className="bg-gray-900"
        aria-labelledby="footer-heading"
      >
        <div className="px-4 md:!px-6 max-w-[1248px] xl:!mx-auto">
          <h2
            id="footer-heading"
            className="sr-only"
          >
            Footer
          </h2>
          <div className="mx-auto max-w-7xl py-16">
            <div className="flex justify-between flex-wrap w-full">
              <div className="space-y-8">
                <Link
                  href="/"
                  className=" text-gray-300 flex-center gap-3"
                >
                  <Image
                    src="/images/logo1.png"
                    alt="logo"
                    width={50}
                    height={50}
                    className="object-contain rounded-md"
                  />
                  <h4 className="text-lg font-bold">StepOne</h4>
                </Link>
                <ul className="text-medium leading-6 text-gray-300">
                  <li className="flex gap-2 items-center mt-4">bibek7here@gmail.com</li>
                  <li className="flex gap-2 items-center mt-4">+977 9818031071</li>
                </ul>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <Link
                    href="/"
                    className="text-gray-50 hover:text-gray-400"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="w-6 h-6" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M480 257.352C480 133.652 379.7 33.3516 256 33.3516C132.3 33.3516 32 133.652 32 257.352C32 369.152 113.9 461.822 221 478.642V322.122H164.11V257.352H221V208.002C221 151.872 254.45 120.842 305.61 120.842C330.12 120.842 355.76 125.222 355.76 125.222V180.352H327.5C299.69 180.352 290.99 197.612 290.99 215.352V257.352H353.11L343.19 322.122H291V478.662C398.1 461.852 480 369.182 480 257.352Z" fill="currentColor"></path>
                    </svg>
                  </Link>
                  <Link
                    href="/"
                    className="text-gray-50 hover:text-gray-400"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-6 h-6" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89V441.61C32 461.91 49.85 480 70.28 480H444.06C464.6 480 480 461.79 480 441.61V66.89C480.12 46.7 464.6 32 444.17 32ZM170.87 405.43H106.69V205.88H170.87V405.43ZM141 175.54H140.54C120 175.54 106.7 160.25 106.7 141.11C106.7 121.62 120.35 106.69 141.35 106.69C162.35 106.69 175.2 121.51 175.66 141.11C175.65 160.25 162.35 175.54 141 175.54ZM405.43 405.43H341.25V296.32C341.25 270.18 331.91 252.32 308.69 252.32C290.95 252.32 280.45 264.32 275.78 276.01C274.03 280.21 273.56 285.93 273.56 291.77V405.43H209.38V205.88H273.56V233.65C282.9 220.35 297.49 201.21 331.44 201.21C373.57 201.21 405.44 228.98 405.44 288.85L405.43 405.43Z" fill="currentColor"></path>
                    </svg>
                  </Link>
                  <Link
                    href="/"
                    className="text-gray-50 hover:text-gray-400"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="w-6 h-6" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M349.33 69.33C374.063 69.4039 397.761 79.2616 415.25 96.7502C432.738 114.239 442.596 137.937 442.67 162.67V349.33C442.596 374.063 432.738 397.761 415.25 415.25C397.761 432.738 374.063 442.596 349.33 442.67H162.67C137.937 442.596 114.239 432.738 96.7502 415.25C79.2616 397.761 69.4039 374.063 69.33 349.33V162.67C69.4039 137.937 79.2616 114.239 96.7502 96.7502C114.239 79.2616 137.937 69.4039 162.67 69.33H349.33ZM349.33 32H162.67C90.8 32 32 90.8 32 162.67V349.33C32 421.2 90.8 480 162.67 480H349.33C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32Z" fill="currentColor"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="mt-8 lg:!mt-0 lg:!w-2/3 w-auto">
                <div className="w-full flex flex-col md:!flex-row gap-8">
                  <div className="w-full md:!w-1/2 relative">
                    <h4 className="text-lg md:!text-xl leading-[26px] md:!leading-[30px] font-semibold text-white">
                      Company
                    </h4>
                    <span className="h-1 w-[80%] absolute top-10 rounded-sm bg-indigo-500 inline-block"></span>
                    <ul
                      role="list"
                      className="mt-12 flex flex-wrap"
                    >
                      <li className="w-1/2 pb-4">
                        <Link
                          href="/"
                          className="text-medium leading-6 text-gray-300 hover:text-white"
                        >
                          About us
                        </Link>
                      </li>
                      <li className="w-1/2 pb-4">
                        <Link
                          href="/"
                          className="text-medium leading-6 text-gray-300 hover:text-white"
                        >
                          Contact us
                        </Link>
                      </li>
                      <li className="w-1/2 pb-4">
                        <Link
                          href="/"
                          className="text-medium leading-6 text-gray-300 hover:text-white"
                        >
                          FAQs
                        </Link>
                      </li>
                      <li className="w-1/2 pb-4">
                        <Link
                          href="/"
                          className="text-medium leading-6 text-gray-300 hover:text-white"
                        >
                          Certificate verification
                        </Link>
                      </li>
                      <li className="w-1/2 pb-4">
                        <Link
                          href="/"
                          className="text-medium leading-6 text-gray-300 hover:text-white"
                        >
                          Privacy policy
                        </Link>
                      </li>
                      <li className="w-1/2 pb-4">
                        <Link
                          href="/"
                          className="text-medium leading-6 text-gray-300 hover:text-white"
                        >
                          Terms and conditions
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:!w-1/2 relative">
                    <h4 className="text-lg md:!text-xl leading-[26px] md:!leading-[30px] font-semibold text-white">
                      Products
                    </h4>
                    <span className="h-1 w-[80%] absolute top-10 rounded-sm bg-indigo-500 inline-block"></span>
                    <ul
                      role="list"
                      className="mt-12 flex flex-wrap"
                    >
                      <li className="w-1/2 pb-4">
                        <Link
                          href="/"
                          className="text-medium leading-6 text-gray-300 hover:text-white"
                        >
                          <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-normal text-gray-300">
                            Step one
                          </p>
                        </Link>
                      </li>
                      <li className="w-1/2 pb-4">
                        <Link
                          href="/"
                          className="text-medium leading-6 text-gray-300 hover:text-white"
                        >
                          <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-normal text-gray-300">
                            Courses
                          </p>
                        </Link>
                      </li>
                      <li className="w-1/2 pb-4">
                        <Link
                          href="/"
                          className="text-medium leading-6 text-gray-300 hover:text-white"
                        >
                          <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-normal text-gray-300">
                            Support System
                          </p>
                        </Link>
                      </li>
                      <li className="w-1/2 pb-4">
                        <Link
                          href="/"
                          className="text-medium leading-6 text-gray-300 hover:text-white"
                        >
                          <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-normal text-gray-300">
                            Become an affiliate
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
