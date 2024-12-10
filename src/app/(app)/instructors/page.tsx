import React from "react";
import InstructorCard from "@/components/InstructorCard";
import { baseApi } from "@/data/constant";

const fetchInstructors = async () => {
  const response = await fetch(`${baseApi}/users/get-instructors`, {
    cache: "no-store"
  });
  if (!response.ok) {
    throw new Error("Failed to fetch instructors");
  }
  return response.json();
};

const page = async () => {
  const { data: instructors } = await fetchInstructors();

  return (
    <div className="flex-center flex-wrap gap-4">
      {instructors?.map((instructor: any) => (
        <InstructorCard
          key={instructor.username}
          avatar={instructor.avatar}
          bio={instructor.bio}
          name={instructor.username}
          expertise={["Good Communicator", "Experienced"]}
        />
      ))}
    </div>
  );
};

export default page;
