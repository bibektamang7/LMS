// src/types/Course.ts

export interface Instructor {
    name: string;
    bio: string;
    avatar: string;
  }
  
  export interface SyllabusItem {
    week: number;
    topic: string;
  }
  
  export interface Review {
    user: string;
    rating: number;
    comment: string;
  }
  
  export interface Course {
    id: string;
    title: string;
    description: string;
    instructor: Instructor;
    duration: string;
    level: string;
    language: string;
    syllabus: SyllabusItem[];
    reviews: Review[];
    price: number;
    imageUrl: string;
    category: string;
  }
  