import Image from 'next/image';
import React from 'react'
import aboutImage from "../../assets/images/about_us/about.jpg"
export default function About() {
  return (
    <main className="max-w-5xl mx-auto ">
      <div>About page</div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-col">
          <Image
            className="max-w-sm rounded-xl shadow-2xl"
            src={aboutImage}
            width={500}
            height={400}
            alt="Picture of the author"
          />
          <div className='text-center'>
            <h1 className="text-3xl font-bold">Its Our Web & Seo Services  News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
}
