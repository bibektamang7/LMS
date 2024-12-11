import React from "react";
import InstructorCard from "@/components/InstructorCard";
import { fetchInstructors } from "@/lib/api";


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
