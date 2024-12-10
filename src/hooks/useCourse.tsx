"use client";
import {
  useGetCoursesQuery,
  useGetCourseQuery,
  useAddCourseMutation,
  useDeleteCourseMutation,
  useUpdateCourseMutation,
  useLazyGetFilteredCoursesQuery,
} from "@/redux/query/course";
import { useEffect, useState } from "react";

export const useCourses = () => {
  const {
    data: courses,
    isLoading,
    isError,
  } = useGetCourseQuery({ page: 1, limit: 12, category: "", level: "" });

  useEffect(() => {
    if (isError) {
      //TODO: functionality for retry
    }
  }, [courses, isLoading]);
  return { courses: courses.data, isLoading, isError };
};

export const useFilteredCourses = () => {
  const[trigger, { data, isLoading, isError, error }] = useLazyGetFilteredCoursesQuery({});
    const [courses, setCourses] = useState(null);
    useEffect(() => {
        if (isError) {
          
        }
        if (data) {
            setCourses(data.data);
        }
  }, [data, isLoading])
  return { courses, isLoading, trigger, isError };
};
