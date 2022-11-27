import React from 'react'
import Image from 'next/image'

const HeroImgScroller = () => {
  return (
    <div><Image className='w-100% h-60 object-cover' src="/unsplashHero01.jpg" alt="Vercel Logo" width={800} height={50} /></div>
  )
}

export default HeroImgScroller