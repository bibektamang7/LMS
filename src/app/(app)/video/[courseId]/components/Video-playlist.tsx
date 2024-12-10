import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { PlayCircle } from 'lucide-react'
import { Syllabus } from '@/types/Course'

interface VideoPlaylistProps {
  videos: Syllabus[]
  currentIndex: number
  onVideoSelect: (index: number) => void
}

export function VideoPlaylist({ videos, currentIndex, onVideoSelect }: VideoPlaylistProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">Video Playlist</h3>
      </div>
      <ScrollArea className="h-[400px] px-4">
        <div className="space-y-2 pb-4">
          {videos.map((video, index) => (
            <Button
              key={index}
              variant={index === currentIndex ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => onVideoSelect(index)}
            >
              <PlayCircle className="mr-2 h-4 w-4" />
              {video.title}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

