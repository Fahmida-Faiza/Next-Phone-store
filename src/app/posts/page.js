import React from 'react'
import getAllPosts from '../lib/getAllPosts'
import Link from 'next/link'

export default async function Posts() {
    // fetxh data
    const posts =  await getAllPosts()
  return (
    <div className='mt-6'>PostsAll:
    <ul className='mt-6'>
    {posts.map((post)=>(

    
    <li key={post.id}>
      <Link href={`/posts/${post.id}`}>{post.title}</Link>
      </li>))}
    
    </ul>
    
    </div>
  )
}
