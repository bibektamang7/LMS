import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Course } from '@/types/Course'

export function CourseInfo({ course }: { course: Course }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.courseTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{course.description}</p>
        <div className="flex items-center">
          <Avatar className="h-12 w-12">
            <AvatarImage src={course.instructor.avatar} alt={course.instructor.username} />
            <AvatarFallback>{course.instructor.username}</AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <p className="text-sm font-medium leading-none">{course.instructor.username}</p>
            <p className="text-sm text-muted-foreground">{course.instructor.username}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

