import React from 'react'
import Image from "next/image"
import HeroImage from "../public/HeroImage.png"


function HeroImgScroller () {
    return (
        <div className="text-center bg-white">
            <div className='flex-col items-center justify center'>
                
                <h1 className="my-5 text-5xl font-bold text-black md:text-7xl">
                    Buy, Sell, Recycle Your Eyewear
                </h1>
                </div>

                <div>
                <p className="text-base text-black md:text-xl">
                    Start selling your new and used eyewears easily.     
                    It’s good for you and for the environment.
                </p>
                <div className='m-12 flex items-start justify-center gap-5 text-center'>
                    <button className='h-14 cursor-pointer rounded-xl border border-[#6A983C] px-8 font-semibold text-black hover:text-[#6A983C] hover:shadow-xl'>
                        Log In
                    </button>

                    <button className='h-14 cursor-pointer rounded-xl bg-[#6A983C] px-8 font-semibold text-black hover:text-white hover:shadow-xl'>
                        Sign Up
                    </button>
                </div>
                </div>
                <div>
                <Image src={"/HeroImage.png"} alt="heroimage" width={1200} height={800} />   
            </div>         
          </div>
          
    )
    
}

export default HeroImgScroller