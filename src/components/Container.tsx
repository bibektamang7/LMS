"use client";
import React, { useEffect } from "react";
import { useGetCoursesQuery } from "@/redux/query/course";
import { useDispatch } from "react-redux";
import { addCourse } from "@/redux/features/course/courseSlice";
import { useGetUserQuery } from "@/redux/query/user";
import { addUser } from "@/redux/features/users/userSlice";
import { useSession } from "next-auth/react";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./ui/Loader";

const Container = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const {
    data: courses,
    isError,
    isLoading,
  } = useGetCoursesQuery({ page: 1, limit: 12, category: "", level: "" });
  const {
    data: user,
    isError: isErrorUser,
    isLoading: isLoadingUser,
  } = useGetUserQuery(session?.user._id);
  const dispatch = useDispatch();
  console.log(courses);
  useEffect(() => {
    if (courses) {
      dispatch(addCourse(courses.data));
    }
  }, [courses, dispatch]);
  useEffect(() => {
    if (user) {
      dispatch(addUser(user.data));
    }
  }, [user, dispatch]);
  if (isLoading || isLoadingUser) {
    return <Loader/>;
  }
  if (isError || isErrorUser) {
    return <h1>Error...</h1>;
  }
  return <>
    {children}
  </>;
};

export default Container;
