"use client"
import getPost from '@/app/lib/getPost';
import React, { useEffect, useState } from 'react'

// export default async function PostPage({params}) {
export default function PostPage() {
  
    // const {id}= params;
    // const post= await getPost(id)

      const [post, setPost] = useState(null);

  useEffect(() => {
    const urlId = Number(window.location.pathname.split('/')[2]);
    fetch("../db.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBlog = data.find(blog=>blog.id === urlId)
        // const foundBlog = data.find((item) => item.id === urlId);
        setPost(foundBlog);
  });
  })

  if(!post){
    return <div>loading data.....</div>
  }
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
