
import React from 'react'
import Image from 'next/image'
import Glass1 from '../public/glass1.png'
import Glass2 from '../public/glass2.png'
import Glass3 from '../public/glass3.png'

const myListing = () => {
    return (
        <div className=" bg-white">  
        <h1 className="pl-8 my-5 text-4xl font-bold text-black md:text-4xl">
            My Listings
        </h1>
        <h4 className="text-m pr-7 pb-6 text-right font-bold text-[#6A983C] hover:text-black">
                List an Eyewear

            </h4>
    
        <div className="pl-8 pb-8 card card-side bg-base-100">
        <figure><Image src={"/Glass1.png"} alt="image" width={250} height={250} /></figure>
        <div className="card-body outline md:outline-2">
          <h2 className="card-title">Black Sunglasses</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h3 className="font-bold">$70</h3>
          <div className="card-actions justify-end">
          <div className='flex space-x-4'>
            <button className='h-14 cursor-pointer rounded-xl bg-[#6A983C] px-8 font-semibold text-black hover:text-white hover:shadow-xl'>
                Edit</button> 
            <button className='h-14 cursor-pointer rounded-xl border border-[#6A983C] px-8 font-semibold text-black hover:text-[#6A983C] hover:shadow-xl'>
                Delete </button>
      </div>
      </div>
      </div>
      </div>
          <div className="pl-8 pb-8 card card-side bg-base-100">
        <figure><Image src={"/Glass2.png"} alt="image" width={250} height={250} /></figure>
        <div className="card-body outline md:outline-2">
          <h2 className="card-title">Pink Sunglasses</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h3 className="font-bold">$20</h3>
          <div className="card-actions justify-end">
          <div className='flex space-x-4'>
            <button className='h-14 cursor-pointer rounded-xl bg-[#6A983C] px-8 font-semibold text-black hover:text-white hover:shadow-xl'>
                Edit</button> 
            <button className='h-14 cursor-pointer rounded-xl border border-[#6A983C] px-8 font-semibold text-black hover:text-[#6A983C] hover:shadow-xl'>
                Delete </button>
      </div>
      </div>
      </div>
      </div>
      <div className="pl-8 pb-8 card card-side bg-base-100">
        <figure><Image src={"/Glass3.png"} alt="image" width={250} height={250} /></figure>
        <div className="card-body outline md:outline-2">
          <h2 className="card-title">Plain Glasses</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h3 className="font-bold">$20</h3>
          <div className="card-actions justify-end">
          <div className='flex space-x-4'>
            <button className='h-14 cursor-pointer rounded-xl bg-[#6A983C] px-8 font-semibold text-black hover:text-white hover:shadow-xl'>
                Edit</button> 
            <button className='h-14 cursor-pointer rounded-xl border border-[#6A983C] px-8 font-semibold text-black hover:text-[#6A983C] hover:shadow-xl'>
                Delete </button>
      </div>
      </div>
      </div>
      </div>
      </div>
        )
    }
    
    export default myListing;