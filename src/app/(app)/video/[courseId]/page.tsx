"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Course } from '@/types/Course'
import { VideoPlayer } from './components/Video-player'
import { VideoPlaylist } from './components/Video-playlist'
import { CourseInfo } from './components/Course-info'
import { CommentsSection } from './components/Comments-section'
import { RelatedResources } from './components/Related-resources'
import { fetchCurrentCourseVideo } from '@/lib/api'



export default async function CoursePage() {
  const param = useParams<{ courseId: string }>();
  const courseId = param?.courseId;

  const [course, setCourse] = useState<Course | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const getCourseData = async () => {
      if (!courseId) return;
      try {
        const {data} = await fetchCurrentCourseVideo(courseId);
        console.log(data);
        setCourse(data);  // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    getCourseData();
  }, [courseId]);  


  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-muted-foreground">Course not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto p-4 space-y-6">
        <h1 className="text-3xl font-bold text-primary">{course.courseTitle}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <VideoPlayer url={course.syllabus[currentVideoIndex].video} />
            <CourseInfo course={course} />
            <CommentsSection courseId={course._id} />
          </div>
          <div className="space-y-6">
            <VideoPlaylist 
              videos={course.syllabus} 
              currentIndex={currentVideoIndex}
              onVideoSelect={setCurrentVideoIndex}
            />
            <RelatedResources resources={course.syllabus} />
          </div>
        </div>
      </main>
    </div>
  )
}

