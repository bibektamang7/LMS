import { AspectRatio } from '@/components/ui/aspect-ratio'

export function VideoPlayer({ url }: { url: string }) {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <video className="h-full w-full rounded-md object-cover" controls>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </AspectRatio>
  )
}

