import Image from "next/image";
import React from "react";

const WhyUs = () => {
  return (
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
              Learn from industry experts who bring real-world experience to the
              table.
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
              Our courses are accredited and recognized by leading institutions.
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
  );
};

export default WhyUs;
