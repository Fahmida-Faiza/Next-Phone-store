import getPost from '@/app/lib/getPost';
import React from 'react'

export default async function PostPage({params}) {
    const {id}= params;
    const post= await getPost(id)
  return (
    <div className="max-w-7xl mx-auto my-10">
      PostPage:
      {/* <h2>title: {post.title}</h2>
      <p>{post.description}</p> */}
      <div className="card-body items-center text-center  bg-green-100 shadow-xl  ">
        <h2 className="card-title text-white btn btn-error my-10">
          Title: {post.title}
        </h2>

        <p className='text-2xl text-black font-bold'>Description: {post.description}</p>
      </div>
    </div>
  );
}
