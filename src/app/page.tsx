"use client";
import Slider from "@/components/Slider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FAQWedget from "@/components/FAQWedget";
import Typewriter from "@/components/TypeWriter";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Software Engineer",
    testimonial:
      "This platform has significantly boosted my career. The courses are well-structured, and the mentors are extremely knowledgeable.",
    image: "/images/person.avif",
  },
  {
    name: "Michael Brown",
    role: "Data Scientist",
    testimonial:
      "I've gained practical skills that I apply in my daily work. The learning experience here is unmatched.",
    image: "/images/person1.avif",
  },
  {
    name: "Sarah Williams",
    role: "UX Designer",
    testimonial:
      "The interactive learning modules and the support from the community have been amazing. Highly recommended!",
    image: "/images/person2.avif",
  },
];

const words = ["Practical", "Better", "Web"];

const Page = () => {
  return (
    <div>
      <div className="px-4 md:!px-6 max-w-[1248px] xl:!mx-auto py-3 relative ">
        <div className="flex-center flex-col-reverse lg:flex-row w-full relative z-10 gap-y-10 lg:!gap-x-10">
          <header className="flex-center flex-col w-full text-center">
            <h1 className="text-2xl leading-9 font-bold flex flex-col justify-center lg:!justify-start flex-wrap text-gray-900 lg:!self-start">
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
            <h6 className="!text-base md:!text-lg leading-6 md:!leading-[26px] font-light text-gray-850 text-center lg:!text-left mt-4 lg:!w-[90%] lg:!self-start">
              Take your career to the next level with industry ready programs,
              <br className="hidden xl:!block" />
              An entire learing ecosystem at your fingertips to make learning
              fun.
              <br className="hidden xl:!block" />
              Choose from a range of tech programs and make your next big career
              switch.
            </h6>
            <Link
              href="/courses"
              className="button mt-9 self-start w-full lg:!w-fit"
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

        {/* courses */}
        <div className="mt-16">
          <h1 className="heading !pb-0 !mb-3">Most Popular Courses</h1>
          <p className="text-gray-600">Choose from hundreds of courses from specialist mentors</p>
          <Slider />
        </div>
        {/* why stepOne */}
        <section className="py-12 bg-white mt-16">
          <div className="container mx-auto px-6">
            <h2 className="heading">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/icons/bookmark.png"
                  alt="Expert Mentors"
                  width={80}
                  height={80}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Expert Mentors
                </h3>
                <p className="text-gray-600">
                  Learn from industry experts who bring real-world experience to
                  the table.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/icons/book.png"
                  alt="Certified Courses"
                  width={80}
                  height={80}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Certified Courses
                </h3>
                <p className="text-gray-600">
                  Our courses are accredited and recognized by leading
                  institutions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/icons/learning.webp"
                  alt="Flexible Learning"
                  width={80}
                  height={80}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Flexible Learning
                </h3>
                <p className="text-gray-600">
                  Access courses anytime, anywhere, with our flexible learning
                  options.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/icons/message.png"
                  alt="Community Support"
                  width={80}
                  height={80}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Community Support
                </h3>
                <p className="text-gray-600">
                  Join a community of learners and get support from peers and
                  mentors.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial */}
        <section className="py-16 mt-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                What Our Students Say
              </h2>
              <p className="text-lg leading-6 text-gray-500 mt-4">
                Hear from those who have transformed their careers with our
                platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-medium leading-6 text-gray-500">
                    {testimonial.testimonial}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQS */}
        <FAQWedget />
      </div>
    </div>
  );
};

export default Page;
