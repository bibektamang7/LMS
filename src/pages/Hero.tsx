import Typewriter from '@/components/TypeWriter'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { words } from '@/data/constant' 


const Hero = () => {
  return (
      <div>
          <div className="flex-center flex-col-reverse lg:flex-row w-full relative z-10 gap-y-10 lg:!gap-x-10">
              <header className="flex-center flex-col w-full text-center">
                <h1 className="text-3xl leading-9 font-bold flex flex-col justify-center lg:!justify-start flex-wrap text-gray-900 lg:!self-start">
                  Learning with StepOne made &nbsp;
                  <div className="flex lg:!inline-flex text-primary-500 flex-wrap break-all justify-center lg:!justify-start">
                    <strong className="inline-block">&lt;</strong>
                    <div
                      className="Typewriter"
                      data-testid="typewrite-wrapper"
                    >
                      <Typewriter words={words} />
                      <span className="">|</span>
                    </div>
                    <strong className="inline-block">&gt;</strong>
                  </div>
                </h1>
                <h6 className="!text-base md:!text-lg leading-6 md:!leading-[24px] font-light text-gray-850 text-center lg:!text-left mt-4 lg:!w-[90%] lg:!self-start">
                  Elevate your career with industry-focused programs,
                  <br className="hidden xl:!block" />
                  Experience a complete learning ecosystem designed for engaging
                  and enjoyable learning.
                  <br className="hidden xl:!block" />
                  Explore a variety of tech courses and make your next career
                  leap.
                </h6>
                <Link
                  href="/courses"
                  className="button"
                >
                  Explore Courses
                </Link>
              </header>
              <div>
                <Image
                  src="/images/test.png"
                  alt="hero image"
                  width={300}
                  height={300}
                  className="lg:w-[900px] lg:h-[480px]"
                />
              </div>
            </div>

            <div className="flex flex-col sm:!flex-row items-center justify-center lg:!justify-between gap-y-6 pt-8 lg:pt-8 flex-wrap lg:flex-nowrap gap-x-3 relative z-10">
              <div className="rounded-lg p-[14px] m-2 flex items-center justify-start py-6 px-6 shadow-md bg-white gap-x-4 w-full md:!w-72 lg:!w-[23%] lg:!self-start">
                <Image
                  src="/icons/course.png"
                  alt="course book icon"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
                <div>
                  <h4 className="text-lg md:!text-xl leading-[26px] md:!leading-[30px] font-bold text-gray-800">
                    200+
                  </h4>
                  <p className="text-xs md:!text-sm leading-[18px] md:!leading-[22px] font-normal text-gray-800">
                    Different Courses
                  </p>
                </div>
              </div>
              <div className="rounded-lg p-[14px] m-2 flex items-center justify-start py-6 px-6 shadow-md bg-white gap-x-4 w-full md:!w-72 lg:!w-[23%] lg:!self-start">
                <Image
                  src="/icons/community.png"
                  alt="community icon"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
                <div>
                  <h4 className="text-lg md:!text-xl leading-[26px] md:!leading-[30px] font-bold text-gray-800">
                    67%
                  </h4>
                  <p className="text-xs md:!text-sm leading-[18px] md:!leading-[22px] font-normal text-gray-800">
                    Communtiy growth
                  </p>
                </div>
              </div>
              <div className="rounded-lg p-[14px] m-2 flex items-center justify-start py-6 px-6 shadow-md bg-white gap-x-4 w-full md:!w-72 lg:!w-[23%] lg:!self-start">
                <Image
                  src="/icons/transition.webp"
                  alt="career transition icon"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
                <div>
                  <h4 className="text-lg md:!text-xl leading-[26px] md:!leading-[30px] font-bold text-gray-800">
                    20000+
                  </h4>
                  <p className="text-xs md:!text-sm leading-[18px] md:!leading-[22px] font-normal text-gray-800">
                    Career Transitions
                  </p>
                </div>
              </div>
              <div className="rounded-lg p-[14px] m-2 flex items-center justify-start py-6 px-6 shadow-md bg-white gap-x-4 w-full md:!w-72 lg:!w-[23%] lg:!self-start">
                <Image
                  src="/icons/resource.png"
                  alt="resource image"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
                <div>
                  <h4 className="text-lg md:!text-xl leading-[26px] md:!leading-[30px] font-bold text-gray-800">
                    1000+
                  </h4>
                  <p className="text-xs md:!text-sm leading-[18px] md:!leading-[22px] font-normal text-gray-800">
                    Resources
                  </p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Hero