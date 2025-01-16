"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <div className='bg-pink-100'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
     <h1 className="title-font italic sm:text-4xl text-3xl mb-4 font-medium text-purple-900">
        Welcome to shazz's cakes...
      </h1>
    <Image
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="hero"
      src="/purple-theme-cake.jpg"
      width={400}
      height={400}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h2 className="title-font italic sm:text-4xl text-3xl mb-4 font-medium text-purple-900">
        Our success story....
      </h2>
      <p className="mb-8 leading-relaxed italic font-thin text-pink-600">
      What began as a humble dream in a tiny kitchen has now blossomed into a beloved cake haven, capturing the hearts (and taste buds) of everyone who walks through our doors. The journey started with nothing but a whisk, a few ingredients, and an unshakeable passion for creating the most irresistible cakes. With every layer baked to perfection and every frosting swirled with care, we quickly realized that it wasn’t just about making cakes—it was about creating moments of joy. Each bite tells a story of dedication, creativity, and love, transforming simple ingredients into sweet masterpieces. From our first oven to today, we've never stopped striving for that perfect balance of flavor and freshness. It’s this commitment to quality and a sprinkle of heart that keeps our customers coming back for more, one slice at a time.
      </p>
      <div className="flex justify-center">
        <Link href={"/cakes"}>
        
        <button className="inline-flex text-white bg-purple-900 border-0 py-2 px-6 focus:outline-none hover:bg-pink-800 rounded text-lg">
          Choose your favourite cake
        </button>
        
       </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero

  