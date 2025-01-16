"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className=' z-icky top-0 bg-pink-100'> 
      <header className="text-gray-600 body-font">
  <div className="container mx-auto  flex-wrap  md:flex-row items-center flex flex-col text-center w-full mb-35 p-20 bg-cover bg-center" style={{ backgroundImage: 'url("/shazz cakes.png ")' }}>
    <nav className="flex lg:w-1/2 flex-wrap items-center text-base md:ml-auto">
      <Link href="/cakes" className="mr-5 hover:bg-pink-900 text-gray-900 text-xl">CAKES</Link>
      
      <Link href="/premiumCookies"className="mr-5 hover:bg-pink-900 text-gray-900 text-xl">PREMIUM COOKIES</Link>
      <Link href="/Flowers" className="mr-5 hover:bg-pink-900 text-gray-900 text-xl">FLOWERS AND MORE</Link>
    </nav>
   
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-pink-900 rounded text-base mt-4 md:mt-0">
        ORDER NOW!!
       
      </button>
    </div>
  </div>
</header>

    </div>
  )
}


export default Header


