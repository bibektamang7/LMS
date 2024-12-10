import React from "react";
import FAQWedget from "@/components/FAQWedget";
import MostPopularCourse from "@/components/widget/MostPopularCourse";
import Hero from "@/pages/Hero";
import WhyUs from "@/pages/Why-us";
import Testimonial from "@/pages/Testimonial";
import { baseApi } from "@/data/constant";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/widget/CallToAction";



export const fetchInitialCourses = async ({page = 1, limit = 6, category = "", level = ""}) => {
  const res = await fetch(`${baseApi}/courses/get-courses?page=${page}&limit=${limit}&category=${category}&level=${level}`, {
    method: "GET",
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error("Failed to fetch Courses");
  }
  return res.json();
}

const Page =  async () => {
  const { data: courses } = await fetchInitialCourses({});
  
  return (
    <main>
      <div>
        <div className="px-4 md:!px-6 max-w-[1248px] xl:!mx-auto py-3 relative ">
          <Hero />
          <MostPopularCourse  courses={courses}/>
          <WhyUs />
          <Testimonial />
          <FAQWedget />
          <CallToAction/>
        </div>
      </div>
    </main>
  );
};

export default Page;
