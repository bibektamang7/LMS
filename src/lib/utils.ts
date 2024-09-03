import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// src/services/fakeCourseAPI.js
import { Course } from "@/types/Course";

export const fetchCourseDetails = (courseId: string): Promise<Course> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: courseId,
        title: "Advanced React and Redux",
        description: "Learn advanced concepts in React.js and Redux. Build complex and high-performance applications.",
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
          { user: "John Smith", rating: 5, comment: "Great course, very detailed and well-organized." },
          { user: "Alice Johnson", rating: 4, comment: "Learned a lot about React, but could use more real-world examples." },
        ],
        price: 199,
      });
    }, 1000); // Simulate network delay
  });
};
