"use client"
import React from 'react'
import Image from 'next/image'

const Cakes=() => {
  return (
    <div id='cakes'>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Products
      </h1>
     
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/images1.jpg"
            width={200}
            height={200}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Barbie Topper Cake
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Shooting Stars
            </h1>
            <p className="leading-relaxed">
             The barbie theme cake with butter cream. Star and barbie toppers. 
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/images4.jpg"
            width={200}
            height={200}/>

           
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE DOLL CAKE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Buuter cream doll cake
            </h1>
            <p className="leading-relaxed">
             The doll cake with Butter cream can be customized with fondant flowers as well.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/images6.jpg"
            width={200}
            height={200}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Trending cake
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              The Fondant Cake
            </h1>
            <p className="leading-relaxed">
             The two tier fondant cake can be customized according to your needs.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/imagw2.jpg"
            width={200}
            height={200}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE FONDANT CAKE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Car theme cake
            </h1>
            <p className="leading-relaxed">
              The fondant cake topped with fondabt cars and clouds the two tier cake can be customized according to your wish.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/wedding5.jpg"
            width={200}
            height={200}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE WEDDING CAKE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Bride to be cake
            </h1>
            <p className="leading-relaxed">
             This is the wedding bride to be cake toppe with fondant can be customized as your wish..
            </p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

      
    </div>
  )
}

export default Cakes
    