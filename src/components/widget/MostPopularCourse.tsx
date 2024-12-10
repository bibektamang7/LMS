"use client"
import React from 'react'
import Slider from '../Slider'
import { Course } from '@/types/Course';

function MostPopularCourse({courses}: {courses: Course[]}) {
  return (
      <div>
            <div className="mt-16">
              <h1 className="heading !pb-0 !mb-3">Most Popular Courses</h1>
              <p className="text-gray-600">
                Choose from hundreds of courses from specialist mentors
              </p>
              <Slider courses={courses}/>
            </div>
    </div>

  )
}

export default MostPopularCourse