import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CourseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api/courses' }),  // Assuming API routes are prefixed with /api/courses
  reducerPath: "courseApi",
  endpoints: (builder) => ({
    // Mutation to add a new course
    addCourse: builder.mutation({
      query: (courseData) => ({
        url: "/add-course",
        method: "POST",
        body: courseData,
      }),
    }),
    
    // Mutation to delete a course by ID
    deleteCourse: builder.mutation({
      query: (courseId) => ({
        url: `/${courseId}`,
        method: "DELETE",
      }),
    }),
    
    // Mutation to update a course by ID
    updateCourse: builder.mutation({
      query: ({ courseId, updates }) => ({
        url: `/${courseId}`,
        method: "PATCH",
        body: updates,
      }),
    }),
    
    // Query to get a specific course by ID
    getCourse: builder.query({
      query: (courseId) => ({
        url: `/get-course?courseId=${courseId}`,
        method: "GET",
      }),
    }),
    
    // Query to get all courses with pagination, category, and level filtering
    getCourses: builder.query({
      query: ({ page = 1, limit = 6, category, level }) => ({
        url: `/get-courses`,
        method: "GET",
        params: { page, limit, category, level },  // Pass pagination and filtering params
      }),
    }),
  }),
});

// Export the hooks for each endpoint to use in your components
export const {
  useAddCourseMutation,
  useDeleteCourseMutation,
  useUpdateCourseMutation,
  useGetCourseQuery,
  useGetCoursesQuery,
} = CourseApi;
