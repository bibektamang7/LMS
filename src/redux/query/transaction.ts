import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const TransactionApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api/payment' }),  
  reducerPath: "transactionApi",
  endpoints: (builder) => ({
    coursePayment: builder.mutation({
      query: (paymentData) => ({
        url: "/khalti", 
        method: "POST",
        body: paymentData,
      }),
    }),
    
    // Get the number of enrolled users for a given month
    enrolledUserOnMonth: builder.mutation({
      query: ({ month, year }) => ({
        url: `/enrolled-users`,  // Example route: POST /api/transactions/enrolled-users
        method: "POST",
        body: { month, year },
      }),
    }),
    
    // Get total revenue generated for a given month
    totalRevenueOnMonth: builder.mutation({
      query: ({ month, year }) => ({
        url: `/revenue`,  // Example route: POST /api/transactions/revenue
        method: "POST",
        body: { month, year },
      }),
    }),
    
    // Fetch the course with the most enrollments
    topEnrolledCourse: builder.mutation({
      query: () => ({
        url: "/top-enrolled-course",  // Example route: POST /api/transactions/top-enrolled-course
        method: "POST",
      }),
    }),
  }),
});

// Export the hooks for each endpoint to use in your components
export const {
  useCoursePaymentMutation,
  useEnrolledUserOnMonthMutation,
  useTotalRevenueOnMonthMutation,
  useTopEnrolledCourseMutation,
} = TransactionApi;
