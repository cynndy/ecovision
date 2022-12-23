
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
// import Glass1 from '../public/glass1.png'
// import Glass2 from '../public/glass2.png'
// import Glass3 from '../public/glass3.png'
import Layout from '../components/Layouts/Layout'
import axios from 'axios'
// import { getDatabase, ref, push, update, set, remove, onValue, query, orderByValue } from "firebase/database"
// import firebase from '../config/firebase'
// const db = getDatabase(firebase);

const myListing = () => {
  let [listings, setListings] = useState([])

  useEffect(() => {
    async function getData() {
      await fetch("/api/listings/")
        .then(res => res.json())
        .then(json => {
          setListings(json)
          console.log(json)
        })
    }

    getData()
  }, [])
  

  return (
    <Layout>
      <h1 className="pl-8 my-5 text-4xl font-bold text-black md:text-4xl">My Listings</h1>
      <h4 className="text-m pr-7 pb-6 text-right font-bold text-[#6A983C] hover:text-black">List an Eyewear</h4>

      {listings.map((listing, index) => {
      <div className="pl-8 pb-8 card card-side bg-base-100" key={index}>
        <figure>
          <Image src={listing.photo} alt="image" width={250} height={250} />
        </figure>
        <div className="card-body border">
          <h2 className="card-title">Black Sunglasses</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h3 className="font-bold">$70</h3>

          <div className="card-actions justify-end">
            <div className='flex space-x-4'>
              <button className='h-14 cursor-pointer rounded-xl bg-[#6A983C] px-8 font-semibold text-black hover:text-white hover:shadow-xl'>Edit</button> 
              <button className='h-14 cursor-pointer rounded-xl border border-[#6A983C] px-8 font-semibold text-black hover:text-[#6A983C] hover:shadow-xl'>Delete </button>
            </div>
          </div>
          
        </div>
      </div>  
    })}
    </Layout>
  )
}

export default myListing;