import Image from 'next/image'
import React from 'react'

const PremiumCookies=() => {
  return (
    <div id='premiumCookies'>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
   
      <div
      className="flex flex-col text-center w-full mb-20 p-10 bg-cover bg-center"
      style={{ backgroundImage: 'url("/bg1.jpg")' }}
    >
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-500">
        PREMIUM COOKIES
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-purple-900">
        Premium cookies are handcrafted treats made with the finest ingredients, offering a rich and indulgent experience with every bite. From velvety Belgian chocolate chunks to buttery shortbread and gourmet toppings, these cookies elevate classic recipes into luxury delicacies. Perfect for special occasions or simply savoring life’s finer moments, premium cookies combine artistry and flavor to create unforgettable delights.
      </p>
    </div>
  
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
         <Image src={"/pc1.jpg"} alt='Premium cookies' height={200} width={200}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              The chocolate chip cookies
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Best seller
            </h1>
            <p className="leading-relaxed">
            Our best-selling chocolate chip cookies are irresistibly chewy, packed with rich chocolate chunks, and crafted from premium ingredients for the ultimate indulgence.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image src={"/pc2.jpg"} alt='Premium cookies' height={300} width={300}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE CHOCOLATE CHIP FUDGE COOKIES
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
             Irrisisitible Treat
            </h1>
            <p className="leading-relaxed">
             
Our chocolate fudge cookies are rich, decadent, and packed with bold cocoa flavor, while our chocolate chip chocolate cookies combine the perfect balance of double chocolate with gooey chips for an irresistible treat.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
         <Image src={"/pc3.jpg"} alt='Premium cookies' height={300} width={300} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Chocolate Feast COOKIES
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              our premium chocolate feast
            </h1>
            <p className="leading-relaxed">
            Our Premium Chocolate Feast Cookies Box offers a luxurious assortment of rich, handcrafted chocolate cookies, perfect for gifting or indulgence.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
         <Image src={"/naankhatai.jpg"} alt='naankhatai' width={300} height={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              NaanKhatai
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              taste the best
            </h1>
            <p className="leading-relaxed">
            "Indulge in the timeless delight of our premium Naan Khatai—rich, buttery, and perfectly crumbly, crafted for unforgettable flavor in every bite!"
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image src={"/pc5.jpg"} alt='premium cookies' width={300} height={300} 
           />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
             Mix cookies
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              taste the best
            </h1>
            <p className="leading-relaxed">
            "Delight in every bite with our Mixed Cookies Box! A perfect assortment of classic favorites and premium indulgences, crafted to satisfy every craving. Share the joy or treat yourself today!"
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
         <Image src={"/pc6.jpg"} alt='' width={300} height={300}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Butter cookies
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Treat for butter lovers 
            </h1>
            <p className="leading-relaxed">
            "Indulge in the rich, buttery goodness of our premium Butter Cookies! Perfectly crisp and melt-in-your-mouth delicious, they’re a timeless treat for any occasion."
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
export default PremiumCookies


