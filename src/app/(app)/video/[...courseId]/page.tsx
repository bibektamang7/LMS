'use client'

import { Course } from "@/types/Course";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
const Header: React.FC = () => {
  
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-indigo-600 text-white">
      <div className="text-2xl font-bold">LMS Platform</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="hover:underline"
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline"
            >
              My Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline"
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const VideoPlayer = ({url}: {url: string}) => {
  return (
    <div className="relative w-full h-0 pb-[56.25%]">
      {/* <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={url ||  "https://www.youtube.com/watch?v=gphBeDNGOuA"}
        title="Course Video"
        allowFullScreen
      /> */}
      <video autoPlay muted width="320" height="240" controls>
        <source  src={url ||  "https://www.youtube.com/watch?v=gphBeDNGOuA" } type="video/mp4"/>
Your browser does not support the video tag.
    </video>
    </div>
  );
};

const VideoPlaylist = ({videos}:{videos: any}) => {
  // const videos = [
  //   { title: "Introduction", duration: "10:05" },
  //   { title: "Lesson 1: Basics", duration: "15:20" },
  //   { title: "Lesson 2: Advanced", duration: "20:15" },
  //   // Add more videos here...
  // ];

  return (
    <aside className="bg-gray-100 p-4 space-y-4">
      <h3 className="text-lg font-semibold mb-4">Video Playlist</h3>
      <ul className="space-y-2">
        {videos?.map((video: any, index: number) => (
          <li
            key={index}
            className="p-3 bg-white rounded-lg shadow hover:bg-gray-200 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <span>{video.title}</span>
              {/* <span className="text-sm text-gray-600">{video.duration}</span> */}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

const CourseInfo= ({
  courseTitle,
  description,
}: {
  courseTitle: string;
    description: string;
}) => {
  return (
    <section className="bg-white p-6 shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{courseTitle}</h2>
      <p className="text-gray-700 mb-4">
        {description}
      </p>
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/50"
          alt="Instructor"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="font-bold">Instructor Name</p>
          <p className="text-gray-500">Instructor Title</p>
        </div>
      </div>
    </section>
  );
};

const CommentsSection: React.FC = () => {
  const comments = [
    { user: "Bibek Tamang", comment: "Great lesson!" },
    { user: "Suman kumar", comment: "Very informative, thanks!" },
    // Add more comments here...
  ];

  return (
    <section className="bg-gray-100 p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Comments</h3>
      <ul className="space-y-4">
        {comments?.map((comment, index) => (
          <li
            key={index}
            className="p-4 bg-white rounded-lg shadow"
          >
            <p className="font-bold">{comment.user}</p>
            <p className="text-gray-700">{comment.comment}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

const RelatedResources = ({ resources }: { resources: any }) => {
  // const resources = [
  //   { title: "Lecture Notes", link: "#" },
  //   { title: "Quiz 1", link: "#" },
  //   // Add more resources here...
  // ];

  return (
    <section className="bg-white p-6 shadow rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
      <ul className="space-y-2">
        {resources?.map((resource: any, index: number) => (
          <li key={index}>
            <a
              href={resource.video}
              className="text-indigo-600 hover:underline"
            >
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

const page = () => {
  const params = useParams<{ courseId: string }>();
  const enrolledCourses = useSelector(
    (state: any) => state.user.user.enrolledCourses
  );
  const course = enrolledCourses.find(
    (course: Course) => course._id === params.courseId
  );
  console.log(course);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      <main className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-1 space-y-6">
          <VideoPlayer  url={course?.syllabus[0].video || "https://www.youtube.com/watch?v=gphBeDNGOuA"} />
          <CourseInfo courseTitle={ course?.courseTitle} description={course?.description} />
          <CommentsSection />
        </div>
        <div className="w-full md:w-1/3 space-y-6">
          <VideoPlaylist videos={course?.syllabus}/>
          <RelatedResources resources={course?.syllabus} />
        </div>
      </main>
    </div>
  );
};

export default page;
