import React from 'react'
import getAllPosts from '../lib/getAllPosts'
import Link from 'next/link'
import card1 from "../../assets/images/team/team1.jpg"
import Image from 'next/image'
export default async function Posts() {
    // fetxh data
    const posts =  await getAllPosts()


   
  return (
    // <div className='mt-6'>PostsAll:
    // <ul className='mt-6'>

    // {posts.map((post)=>(

    // <li key={post.id}>
    //   <Link href={`/posts/${post.id}`}>{post.title}</Link>
    //   </li>))}

    // </ul>
    // </div>
    <main className="max-w-7xl mx-auto my-20">
      <div>
        <h1 className="text-center font-bold text-3xl lg:text-5xl my-5">
          Display All Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {posts.map((post) => (
            <div key={post.id} className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  className="max-w-sm rounded-xl shadow-2xl"
                  src={card1}
                  width={500}
                  height={400}
                  alt="Picture of the author"
                />
              </figure>

              <div className="card-body items-center text-center my-10">
                <Link href={`/posts/${post.id}`}>
                  <h2 className="card-title text-white btn btn-warning">{post.title}</h2>
                </Link>
                <p>Here Our company Revinue and terms more conditions</p>
                {/* <div className="card-actions ">
                  <button className="btn btn-primary">Show More...</button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
