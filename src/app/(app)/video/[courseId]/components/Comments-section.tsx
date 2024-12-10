'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

interface Comment {
  id: string
  user: {
    name: string
    avatar: string
  }
  content: string
  createdAt: string
}

const initialComments: Comment[] = [
  {
    id: '1',
    user: { name: 'Bibek Tamang', avatar: '/avatars/bibek.jpg' },
    content: 'Great lesson!',
    createdAt: '2023-06-01T12:00:00Z',
  },
  {
    id: '2',
    user: { name: 'Suman Kumar', avatar: '/avatars/suman.jpg' },
    content: 'Very informative, thanks!',
    createdAt: '2023-06-02T14:30:00Z',
  },
]

export function CommentsSection({ courseId }: { courseId: string }) {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Date.now().toString(),
      user: { name: 'Current User', avatar: '/avatars/user.jpg' },
      content: newComment,
      createdAt: new Date().toISOString(),
    }

    setComments([comment, ...comments])
    setNewComment('')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Comments</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button type="submit">Post</Button>
        </form>
        <div className="mt-6 space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex space-x-4">
              <Avatar>
                <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold">{comment.user.name}</h4>
                  <span className="text-xs text-muted-foreground">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="mt-1 text-sm">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

