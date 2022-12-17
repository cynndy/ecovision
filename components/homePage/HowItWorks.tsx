import React from 'react'
import Image from 'next/image'

function HowItWorks () {
    return (
        <div className="flex-col bg-green-50 space-y-2 pt-8 pb-6 ">
            <h1 className="my-10 text-5xl font-bold text-black md:text-3xl text-center">
                How It Works
            </h1>
        <div className="flex flex-row space-x-10">
            <div className="inline-block ml-4">
            <Image src="/sunglass1.png" alt='/' width={250} height={300} />
            <div className='inline-block'>
            <h3 className="mt-4 text-sm font-bold text-black text-center">
                Sell and Declutter
            </h3>
            
            <p className="ml-4">
                Make money while saving the earth
            </p>
            </div>
            </div>
            <div className="inline-block">
            <Image src="/sunglass2.png" alt='/' width={250} height={300} />
            <div className='inline-block'>
            <h3 className="mt-4 text-sm font-bold text-black text-center">
                Find Good Deals
            </h3>
            <p>
                It is also a great deal for the environment
            </p>
            </div>
            </div>
            <div className="inline-block mr-4">
            <Image src="/sunglass3.png" alt='/' width={250} height={300} />
            <div className='inline-block'>
            <h3 className="mt-4 text-sm font-bold text-black text-center">
                Ask Questions
            </h3>

            <p className="mr-4">
                Buy and Sell by asking and answering questions
            </p>
            </div>
            </div>
        </div>
    </div>
    )
}

export default HowItWorks