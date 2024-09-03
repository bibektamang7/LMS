"use client";
import Link from "next/link";
import React from "react";

const course = {
  id: 1,
  title: "Advanced React and Redux",
  description:
    "Learn advanced concepts in React.js and Redux. Build complex and high-performance applications.",
  instructor: {
    name: "Jane Doe",
    bio: "Senior Developer at Tech Corp with over 10 years of experience in front-end development.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  duration: "12 weeks",
  level: "Advanced",
  language: "English",
  syllabus: [
    { week: 1, topic: "Introduction to Advanced React" },
    { week: 2, topic: "State Management with Redux" },
    { week: 3, topic: "Optimizing React Performance" },
    { week: 4, topic: "React Router and Navigation" },
    { week: 5, topic: "Testing in React Applications" },
    { week: 6, topic: "Advanced Component Patterns" },
    { week: 7, topic: "Server-Side Rendering (SSR)" },
    { week: 8, topic: "Static Site Generation (SSG)" },
    { week: 9, topic: "React and TypeScript" },
    { week: 10, topic: "Managing Side Effects in Redux" },
    { week: 11, topic: "React with GraphQL" },
    { week: 12, topic: "Final Project and Presentation" },
  ],
  reviews: [
    {
      user: "John Smith",
      rating: 5,
      comment: "Great course, very detailed and well-organized.",
    },
    {
      user: "Alice Johnson",
      rating: 4,
      comment:
        "Learned a lot about React, but could use more real-world examples.",
    },
  ],
  price: 199,
};

const mentor = {
  name: "Jane Doe",
  bio: "Experienced developer with a passion for teaching. Specialized in frontend technologies and design.",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  expertise: ["React", "TypeScript", "TailwindCSS", "UX Design"],
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/janedoe",
    twitter: "https://twitter.com/janedoe",
    github: "https://github.com/janedoe",
  },
};

const page = () => {
  return (
    <section className="relative lg:!pb-32 mb-8 overflow-x-clip">
      <div className="bg-gray-800 py-4 md:!py-6">
        <div className="px-4 md:!px-6 max-w-[1248px] xl:!mx-auto flex w-full justify-between md:!gap-[17px] lg:!gap-[50px] md:mb-9 flex-col !gap-10 md:!flex-col lg:!flex-row items-center gap-y-4">
          <div className="w-full lg:max-w-[500px]">
            <div className="flex items-center gap-1 pb-2">
              <div className="flex-center gap-1 text-gray-600">
                <p className="text-xs md:!text-sm leading-[18px] md:!leading-[22px] font-normal text-white cursor-pointer"></p>
              </div>
              <p className="text-xs md:!text-sm leading-[18px] md:!leading-[22px] font-bold text-white">
                Mechine Learing
              </p>
            </div>
            <div className="flex flex-col gap-4 md:!pt-0 md:!pb-2">
              <div>
                <h1 className="text-2xl md:!text-4xl leading-9 md:!leading-[44px] font-bold text-white">
                  Interview Preparation for ML Engineers
                </h1>
              </div>
              <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-normal text-slate-300">
                Interview preparation for ML Engineers involves mastering
                algorithms, data structures, and Ml concepts. Focus on conding
                skills, system design, and ML theory. Practice with mock
                interviews, coding platforms, and reviewing past interview
                questions. Build and showcase projects.
              </p>
              <h4 className="text-lg md:!text-xl leading-[26px] md:!leading-[30px] font-semibold text-white">
                FREE
              </h4>
              <div className="flex gap-3 flex-col sm:!flex-row pt-3 md:!pt-3">
                <Link
                  href="/"
                  className="opacity-100 text-white hover:bg-indigo-500 text-sm px-3 py-[10px] sm:!text-base sm:!px-6 sm:!py-3 font-semibold flex-center gap-2 rounded-lg w-full sm:!w-[200px] bg-indigo-700"
                >
                  Enroll Now
                </Link>
                <Link
                  href=""
                  className="opacity-100 text-indigo-500 bg-indigo-50 hover:bg-indigo-100 text-sm px-3 py-[10px] sm:!text-base sm:!px-6 sm:!py-3 font-semibold flex-center gap-2 rounded-lg sm:!w-[200px] w-full"
                >
                  Share
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center px-6 py-4">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src={mentor.avatar}
                alt={mentor.name}
              />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {mentor.name}
                </h2>
                <p className="text-gray-600">{mentor.bio}</p>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-100">
              <h3 className="text-gray-700 font-semibold mb-2">Expertise</h3>
              <ul className="flex flex-wrap">
                {mentor.expertise.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-indigo-600 text-white text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex space-x-3">
                {mentor.socialLinks.linkedin && (
                  <a
                    href={mentor.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.439c0-3.065-3-2.831-3 0v5.439h-3v-10h3v1.355c1.396-2.586 7-2.777 7 2.476v6.169z" />
                    </svg>
                  </a>
                )}
                {mentor.socialLinks.twitter && (
                  <a
                    href={mentor.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.194-.897-.955-2.178-1.55-3.594-1.55-2.717 0-4.917 2.2-4.917 4.917 0 .385.043.76.127 1.118-4.083-.205-7.702-2.16-10.126-5.134-.423.725-.666 1.567-.666 2.465 0 1.701.866 3.2 2.181 4.078-.805-.026-1.562-.247-2.228-.616v.062c0 2.377 1.691 4.358 3.935 4.81-.412.112-.847.171-1.294.171-.317 0-.626-.031-.929-.088.627 1.956 2.445 3.379 4.6 3.418-1.68 1.316-3.801 2.101-6.102 2.101-.396 0-.787-.023-1.175-.069 2.179 1.396 4.768 2.21 7.557 2.21 9.054 0 14.009-7.5 14.009-14.009 0-.213-.005-.426-.014-.637.961-.695 1.8-1.562 2.462-2.549z" />
                    </svg>
                  </a>
                )}
                {mentor.socialLinks.github && (
                  <a
                    href={mentor.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-900"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.758-1.333-1.758-1.09-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.107-.775.418-1.305.763-1.605-2.665-.303-5.466-1.335-5.466-5.93 0-1.31.469-2.382 1.236-3.221-.124-.303-.535-1.523.118-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.005-.404 1.021.005 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.654 1.653.243 2.873.119 3.176.77.839 1.234 1.911 1.234 3.221 0 4.61-2.804 5.625-5.475 5.921.43.37.815 1.102.815 2.222v3.293c0 .321.217.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>
              <Link
                href="/"
                className="opacity-100 text-white hover:bg-indigo-500 text-sm px-3 py-[10px] sm:!text-base sm:!px-6 sm:!py-3 font-semibold flex-center gap-2 rounded-lg w-full sm:!w-[200px] bg-indigo-700"
              >
                Contact Mentor
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="px-4 md:!px-6 max-w-[1248px] xl:!mx-auto flex flex-col gap-16 !p-0 bg-gradient-to-b from-white to-[#FFF7F5] w-[80%] m-auto rounded-lg">
            <div className="sm:flex sm:gap-6 flex-wrap rounded-lg justify-around sm:py-[44px] p-8">
              <div className="flex flex-col sm:items-center gap-1 mb-6 sm:m-0">
                <h3 className="text-xl md:!text-2xl leading-[30px] md:!leading-8 font-bold text-gray-900">
                  29th Apr'24
                </h3>
                <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-normal text-[#757575]">
                  Start Date
                </p>
              </div>
              <div className="flex flex-col sm:items-center gap-1 mb-6 sm:m-0">
                <h3 className="text-xl md:!text-2xl leading-[30px] md:!leading-8 font-bold text-gray-900">
                  English
                </h3>
                <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-normal text-[#757575]">
                  Language
                </p>
              </div>
              <div className="flex flex-col sm:items-center gap-1 mb-6 sm:m-0">
                <h3 className="text-xl md:!text-2xl leading-[30px] md:!leading-8 font-bold text-gray-900">
                  4-5 Month
                </h3>
                <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-normal text-[#757575]">
                  Duration
                </p>
              </div>
              <div className="flex flex-col sm:items-center gap-1 mb-6 sm:m-0">
                <h3 className="text-xl md:!text-2xl leading-[30px] md:!leading-8 font-bold text-gray-900">
                  7-10 PM IST WED
                </h3>
                <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-normal text-[#757575]">
                  Doubt Class Timing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800">
        

        {/* Syllabus Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-3 text-indigo-600">Syllabus</h2>
          <ul className="space-y-4">
            {course.syllabus.map((item, index) => (
              <li
                key={index}
                className="p-4 border-l-4 border-indigo-600 bg-gray-50 rounded-md shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-gray-700">
                    Week {item.week}
                  </span>
                  <span className="text-sm text-gray-500">{item.topic}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Review Section */}
        <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800">
          {/* Course Detail Content */}

          {/* Testimonial Section */}
          <div className="mt-8">
            <h2 className="text-3xl font-bold mb-6 text-indigo-600 text-center">
              Student Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {course.reviews.map((review, index) => (
                <div
                  key={index}
                  className="relative p-8 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white rounded-lg shadow-lg"
                >
                  <p className="text-xl italic leading-relaxed mb-8">
                    "{review.comment}"
                  </p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <img
                      src=""
                      alt={review.user}
                      className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                  <div className="text-center mt-10">
                    <h3 className="text-lg font-semibold">{review.user}</h3>
                    <span className="text-sm text-gray-200">
                      Rating: {review.rating} / 5
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
