export const words = ["Practical", "Better", "Web"];

export const testimonials = [
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


export const filterOptions = {
  categories: ['Development', 'Design', 'Marketing', 'Business', 'Data Science', 'AI', "Programming"],
  levels: ['Beginner', 'Intermediate', 'Advanced'],
};

import { DollarSign, Users, Award, TrendingUp } from 'lucide-react'

export const navItem_List = [
  {
    title: "Courses",
    location: "/courses",
  },
  {
    title: "Become an affiliate",
    location: "/affiliate-program",
  },
  {
    title: "Instructors",
    location: "/instructors",
  },
];

export const navigationItems = [
  {
    title: "Dashboard",
    icon: "/icons/dashboard.png",
    redirect: "/dashboard"
  },
  {
    title: "Courses",
    icon: "/icons/course.png",
    redirect: "/dashboard/courses"
  },
  {
    title: "Users",
    icon: "/icons/user.png",
    redirect: "/dashboard/users"
  },
  
];

export const affiliateTopic = [
  {
    icon: DollarSign,
    title: "Competitive Commission",
    description: "Earn up to 30% commission on each successful referral",
  },
  {
    icon: Users,
    title: "Large Audience",
    description: "Tap into our user base of over 100,000 learners",
  },
  {
    icon: Award,
    title: "Quality Courses",
    description: "Promote top-rated courses from industry experts",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunity",
    description: "Scale your earnings as our platform expands",
  },
];
