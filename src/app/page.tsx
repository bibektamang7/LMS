import React from "react";
import FAQWedget from "@/components/FAQWedget";
import MostPopularCourse from "@/components/widget/MostPopularCourse";
import Hero from "@/pages/Hero";
import WhyUs from "@/pages/Why-us";
import Testimonial from "@/pages/Testimonial";
import CallToAction from "@/components/widget/CallToAction";
import { fetchInitialCourses } from "@/lib/api";


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
