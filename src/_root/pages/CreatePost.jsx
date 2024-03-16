import React from 'react'
import PostForm from '../../components/forms/PostForm'

const CreatePost = () => {
  return (
    <div className='flex flex-1'>
        <div className='flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 md:px-8 lg:p-14 custom-scrollbar'>
            <div className='flex gap-2 w-full'>
                <img src="/assets/icons/add-post.svg" alt="add-post" />
                <p className=''>Create Post</p>
            </div>
            <PostForm/>

        </div>
    </div>
  )
}

export default CreatePost