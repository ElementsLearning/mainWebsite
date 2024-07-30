import { PersonIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { Comment } from '@/constants/Blogs/blog'
import { daysAgo } from '@/lib/utils'

type CommentSectionProps = {
  id: string
}

export const CommentSection: React.FC<CommentSectionProps> = ({id}) => {

  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    const fetchComments = async () => {
      const {comments: fetchedComments} = await (await fetch(`/api/comments/${id}`)).json()
      setComments(fetchedComments)
    }
    fetchComments()
  }, [])

  const uploadComment = async (name: string, content: string) => {
    const { comment } = await (await fetch(`/api/comments/new`, {
      method: 'POST',
      body: JSON.stringify({comment : {blogID: id, name, content}}),
    })).json()
    setComments([...comments , comment])
  }

  const [name, setName] = useState("")
  const [content, setContent] = useState("")

  return (
    <div className='flex flex-col'>
      <div className='h-px w-full bg-light-black flex justify-center'>
        <div className='relative size-px bg-white'>
          <div className="border-light-black border w-fit text-light-black bg-white rounded-full sm:text-xl md:text-3xl p-2 sm:p-4 -translate-x-1/2 -translate-y-1/2" >
            Comments
          </div>
        </div>
      </div>
      <div className="flex flex-col py-6 gap-2">
        <div className='p-2 px-4 xs:px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col gap-2'>
          <p className='text-2xl font-semibold'>Add Your Own Comment</p>
          <Card className='flex flex-col p-6 bg-secondary shadow-lg text-xl gap-2'>
            <div className='flex gap-2 items-center justify-between'>
              <div className='flex gap-2 items-center flex-1'>
                <PersonIcon className='size-8 md:size-10 rounded-full p-1 border md:border-2 border-black bg-white' />
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' className='bg-white max-w-sm'/>
              </div>
              <div className='hidden sm:flex gap-2'>
                <Button onClick={() => {setName(""); setContent("")}} variant={'outline'}>Clear</Button>
                <Button disabled={!name || !content} onClick={() => {uploadComment(name, content); setName(""); setContent("")}}>Post</Button>
              </div>
            </div>
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder='Comment...' className='h-32 bg-white' />
            <div className='flex sm:hidden gap-2'>
              <Button onClick={() => {setName(""); setContent("")}} variant={'outline'}>Clear</Button>
              <Button disabled={!name || !content} onClick={() => {uploadComment(name, content); setName(""); setContent("")}}>Post</Button>
            </div>
          </Card>
        </div>
        {comments.map(({name, content, createdAt}, i) => 
        <div key={i} className='flex flex-col gap-4 p-6 px-4 xs:px-6 sm:px-10 md:px-12 lg:px-16 border-b border-black'>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
            <div className='flex gap-2 items-center text-xl sm:text-2xl font-bold tracking-wide'>
              <PersonIcon className='size-8 md:size-10 rounded-full p-1 border md:border-2 border-black bg-neutral-200' />
              <p>{name}</p>
            </div>
            <div>
              <p>{daysAgo(createdAt)}</p>
            </div>
          </div>
          <p className='md:text-lg'>{content}</p>
        </div>
        )}
      </div>
    </div>
  )
}
