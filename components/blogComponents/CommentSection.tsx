import React, { useEffect, useState } from 'react'
import { Trash, Trash2, Trash2Icon } from 'lucide-react'

import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Comment } from '@/constants/Blogs/blog'
import { Input } from '../ui/input'
import { PersonIcon } from '@radix-ui/react-icons'
import { Textarea } from '../ui/textarea'
import { daysAgo } from '@/lib/utils'
import { useToast } from '../ui/use-toast'

type CommentSectionProps = {
  id: string
  admin?: boolean 
}

export const CommentSection: React.FC<CommentSectionProps> = ({id, admin=false}) => {

  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const fetchComments = async () => {
      const {comments: fetchedComments} = await (await fetch(`/api/comments/${admin ? "all/" : ""}${id}`)).json()
      setComments(fetchedComments)
    }
    fetchComments()
  }, [])

  const uploadComment = async (name: string, content: string) => {
    setLoading(true)
    const { comment } = await (await fetch(`/api/comments/new`, {
      method: 'POST',
      body: JSON.stringify({comment : {blogID: id, name, content}}),
    })).json()
    setComments([comment, ...comments])
    setLoading(false)
    toast({title: "Comment has been Posted", description: "Your comments has been posted, and will be visible after approval", variant: "success"})
  }
  
  const toggleApprove = async (id: string) => {
    setLoading(true)
    const { comment } = await (await fetch(`/api/comments/approve/${id}`)).json()
    setComments(comments.map(c => c._id === comment._id ? comment : c))
    setLoading(false)
    toast({title: `Comment has been ${comment.approved ? "Made Public" : "Hidden"}`, variant: comment.approved ? "success" : "destructive"})
  }

  const deleteComment = async (id: string) => {
    setLoading(true)
    const { comment } = await (await fetch(`/api/comments/delete/${id}`)).json()
    setComments(comments.filter(c => c._id !== comment._id))
    setLoading(false)
    toast({title: "Comment has been Deleted", variant: "destructive"})
  }

  const [name, setName] = useState("")
  const [content, setContent] = useState("")

  return (
    <div className='flex flex-col'>
      <div className="flex flex-col justify-center h-10 sm:h-16 lg:h-20">
        <div className='h-px w-full bg-light-black flex justify-center'>
          <div className='relative size-px bg-white'>
            <div className="border-light-black border w-fit text-light-black bg-white rounded-full sm:text-xl md:text-3xl p-2 sm:p-4 -translate-x-1/2 -translate-y-1/2" >
              Comments
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-6">
        {!admin && 
        <div className='p-2 px-4 xs:px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col gap-2'>
          <p className='text-2xl font-semibold'>Add Your Own Comment</p>
          <Card className='flex flex-col p-6 bg-secondary shadow-lg text-xl gap-2'>
            <div className='flex gap-2 items-center justify-between'>
              <div className='flex gap-2 items-center flex-1'>
                <PersonIcon className='size-8 md:size-10 rounded-full p-1 border md:border-2 border-black bg-white' />
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' className='bg-white max-w-sm flex-1'/>
              </div>
              <div className='hidden sm:flex gap-2'>
                <Button onClick={() => {setName(""); setContent("")}} variant={'outline'}>Clear</Button>
                <Button disabled={!name || !content || loading} onClick={() => {uploadComment(name, content); setName(""); setContent("")}}>{loading ? "Loading" : "Post"}</Button>
              </div>
            </div>
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder='Comment...' className='h-32 bg-white' />
            <div className='flex sm:hidden gap-2'>
              <Button onClick={() => {setName(""); setContent("")}} variant={'outline'}>Clear</Button>
              <Button disabled={!name || !content || loading} onClick={() => {uploadComment(name, content); setName(""); setContent("")}}>{loading ? "Loading" : "Post"}</Button>
            </div>
          </Card>
        </div>}
        {comments.length !== 0 ?
        <>
        {comments.map(({_id, approved, name, content, createdAt}, i) => 
        <div key={_id} className={`flex flex-col gap-4 p-6 px-4 xs:px-6 sm:px-10 md:px-12 lg:px-16 border-b border-black ${!admin && !approved && "bg-red-100"}`}>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
            <div className='flex gap-2 items-center text-xl sm:text-2xl font-bold tracking-wide'>
              <PersonIcon className='size-8 md:size-10 rounded-full p-1 border md:border-2 border-black bg-neutral-200' />
              <div className='flex flex-col'>
                <p>{name}</p>
                {admin && <p className='text-neutral-400 text-xs font-normal'>{_id}</p>}
              </div>
            </div>
            <div>
              {!admin ? 
              approved ?
              <p>{daysAgo(createdAt)}</p> :
              <p>Waiting for Approval</p> :
              <div className='flex gap-2'>
                <Button disabled={loading} onClick={() => toggleApprove(_id)} className={`${!approved ? "bg-green-500" : "bg-red-500"} text-white font-bold`}>{approved ? "Disapprove" : "Approve"}</Button>
                <Button variant={"outline"} size={"icon"} onClick={() => deleteComment(_id)}><Trash2Icon className='' /></Button>
              </div>}
            </div>
          </div>
          <p className='md:text-lg'>{content}</p>
        </div>
        )}
        </>:
        admin ? <p className='text-center text-lg xs:text-xl lg:text-3xl italic text-neutral-400'>Nothing to see here</p> : <></>}
      </div>
    </div>
  )
}
