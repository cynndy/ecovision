import React from 'react'

function StartListing () {
    return (
        <div className="flex-col space-y-2 pt-8 pb-6">
            <h1 className="my-4 text-center font-bold md:text-3xl ">
                Start Listing
            </h1>
            <p>
                Join over 4,000+ users happily buying and selling eyewears with Ecovision
            </p>
            <div className='m-12 flex items-start justify-center gap-5 text-center pt-3'>
                    <button className='h-14 cursor-pointer rounded-xl border border-[#6A983C] px-8 font-semibold text-black hover:text-[#6A983C] hover:shadow-xl'>
                        Learn More
                    </button>

                    <button className='h-14 cursor-pointer rounded-xl bg-[#6A983C] px-8 font-semibold text-black hover:text-white hover:shadow-xl'>
                        Sign Up
                    </button>
                </div>
            
        </div>
    )
}

export default StartListing