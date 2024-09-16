"use client";
import React, { useEffect } from "react";
import { addInstructors } from "@/redux/features/users/userSlice";
import { useDispatch } from "react-redux";
import { useGetInstructorsQuery } from "@/redux/query/user";
import InstructorCard from "@/components/InstructorCard";

const page = () => {
  const {
    data: instructors,
    isError,
    isLoading,
  } = useGetInstructorsQuery(null);
  const dispatch = useDispatch();

  console.log(instructors)
  useEffect(() => {
      if (instructors) {
      dispatch(addInstructors(instructors.data));
    }
  }, [instructors, dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Something went wrong...</h1>;
  }
  return (
    <div className="flex-center flex-wrap gap-4">
      {instructors?.data.map((instructor:any, index: number) => (
        <InstructorCard
          avatar={instructor.profile}
              bio={instructor.bio}
              name={instructor.username}
              expertise={["Good Communicator", "Experienced"]}
        />
      ))}
    </div>
  );
};

export default page;
