import React from 'react'
import Image from 'next/image'



function RecentListing () {
    return (
        <div className='flex-col pt-8 pb-6'>
            <h1 className="my-12 text-5xl font-bold text-black md:text-3xl">
                Recently Listed
            </h1>
            <h4 className="text-sm text-right text-[#6A983C] hover:text-black">
                View All 

            </h4>
            <div className="flex flex-row space-x-7">
            <div className="inline-block text-center">
                <Image src="/glass1.png" alt='/' width={250} height={250} />
            <div className='inline-block'>
            <h3 className="mt-4 text-sm font-bold text-black">
                Gentle Monster Sunglasses
            </h3>
            <p>
                Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit. 
            </p>
            <p className="font-bold text-center">$70</p>
            </div>
            </div>
            <div className="inline-block text-center">
                <Image src="/glass2.png" alt='/' width={250} height={250} />
            <div className='inline-block'>
            <h3 className="mt-4 text-sm font-bold text-black ">
                Yellow Sunglasses
            </h3>
            <p>
                Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit. 
            </p>
            <p className="font-bold text-center">$20</p>
            </div>
            </div>
            <div className="inline-block text-center">
                <Image src="/glass3.png"  alt='/' width={250} height={250} />
            <div className='inline-block'>
            <h3 className="mt-4 text-sm font-bold text-black ">
                Plain Glasses
            </h3>   
            <p>
                 Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit. 
            </p>
            <p className="font-bold text-center">$20</p>
            </div>
            </div>
            </div>
            </div>
    )
}

export default RecentListing

