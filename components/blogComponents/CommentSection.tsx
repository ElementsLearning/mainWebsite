import React from 'react'

export const CommentSection = () => {
  return (
    <div className='flex flex-col'>
      <div className='h-px w-full bg-light-black flex justify-center'>
        <div className='relative size-px bg-white'>
          <div className="border-light-black border w-fit text-light-black bg-white rounded-full text-3xl p-4 -translate-x-1/2 -translate-y-1/2" >
            Comments
          </div>
        </div>
      </div>
      <div className="bg-white h-96"></div>
    </div>
  )
}
