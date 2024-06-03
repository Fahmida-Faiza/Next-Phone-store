import getPost from '@/app/lib/getPost';
import React from 'react'

export default async function PostPage({params}) {
    const {id}= params;
    const post= await getPost(id)
  return (
    <div>PostPage:
        <h2>title: {post.title}</h2>
        <p>{post.description}</p>

    </div>
  )
}
