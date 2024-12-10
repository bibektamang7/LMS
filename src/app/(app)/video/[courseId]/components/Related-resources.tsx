import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Syllabus } from '@/types/Course'
import { FileText } from 'lucide-react'

export function RelatedResources({ resources }: { resources: Syllabus[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Related Resources</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {resources.map((resource, index) => (
            <li key={index}>
              <a
                href={resource.video}
                className="flex items-center space-x-2 text-sm text-primary hover:underline"
              >
                <FileText className="h-4 w-4" />
                <span>{resource.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

