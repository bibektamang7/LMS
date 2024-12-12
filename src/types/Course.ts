// src/types/Course.ts

export interface Syllabus {
  title: string;
  video: string;
}


export interface Video {
  title: string;
  courseId: string;
  videoUrl: string;
  isChecked: boolean;
  videoDescription: string;
}

export interface SyllabusItem {
  title: string;
  description: string;
  video: string;
}

interface Instructor{
  _id: string;
  username: string;
  bio: string; 
  avatar: string
}
export interface Course {
  _id: string;
  courseTitle: string;
  instructor: Instructor; 
  description: string;
  syllabus: SyllabusItem[];
  features?: string[];
  category: string;
  level?: string;
  price?: number;
  startIn: string;
  endsIn: string;
  language: string;
  duration: string;
  thumbnail: string;
  enrolledStudents?: number,
}


export interface User {
  _id: string;
  username: string;
  email: string;
  isVerified: boolean;
  userType: string;
  expertise: [
    {
      type: String;
      require: true;
    }
  ];
  profile: String;
  bio: String;
  enrolledCourses: string[];
}
