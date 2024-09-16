import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api/users' }),  // Assuming your user-related API endpoints are under /api/users
  reducerPath: "userApi",
  endpoints: (builder) => ({
    // Fetch a specific user by ID
    getUser: builder.query({
      query: (userId) => ({
        url: `/get-user?userId=${userId}`,  // Example route: GET /api/users/:id
        method: "GET",
      }),
    }),
    
    // Update a specific user by ID
    updateUser: builder.mutation({
      query: ({ userId, updates }) => ({
        url: `/${userId}`,  // Example route: PATCH /api/users/:id
        method: "PATCH",
        body: updates,
      }),
    }),
    
    // Add a new user
    addUser: builder.mutation({
      query: (userData) => ({
        url: "/",  // Example route: POST /api/users/
        method: "POST",
        body: userData,
      }),
    }),
    
    // Delete a specific user by ID
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/${userId}`,  // Example route: DELETE /api/users/:id
        method: "DELETE",
      }),
    }),
    
    // Fetch a specific instructor by ID
    getInstructor: builder.mutation({
      query: (instructorId) => ({
        url: `/instructors/${instructorId}`,  // Example route: GET /api/users/instructors/:id
        method: "GET",
      }),
    }),
    
    // Fetch all instructors
    getInstructors: builder.query({
      query: () => ({
        url: "/get-instructors",  // Example route: GET /api/users/instructors
        method: "GET",
      }),
    }),
  }),
});

// Export the hooks for each endpoint to use in your components
export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useAddUserMutation,
  useDeleteUserMutation,
  useGetInstructorMutation,
  useGetInstructorsQuery,
} = UserApi;
