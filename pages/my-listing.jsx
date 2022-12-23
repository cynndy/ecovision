import React, { useState, useEffect } from 'react'
import Image from 'next/image'
// import Glass1 from '../public/glass1.png'
// import Glass2 from '../public/glass2.png'
// import Glass3 from '../public/glass3.png'
import Layout from '../components/Layouts/Layout'
import CardListing from '../components/CardListing'
import axios from 'axios'

const myListing = () => {
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(true)
  
  // const getListings = async () => {
  //   try {
  //     const listings = await axios.get("http://localhost:3000/api/listings/")
  //     const response = await listings.data 

  //     if(response) setListings(response)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    console.log('components mounted')
    document.title = "My Listings | EcoVision"

    setLoading(true)
    fetch("/api/listings/")
      .then(res => res.json())
      .then(data => {
        setListings(data)
        setLoading(false)
      })
  }, [])

  if(loading) return <div>Loading...</div>
  if(!listings) return <div>No record found...</div>
  
  return (
    <Layout>
      <h1 className="pl-8 my-5 text-4xl font-bold text-black md:text-4xl">My Listings</h1>
      <h4 className="text-m pr-7 pb-6 text-right font-bold text-[#6A983C] hover:text-black">List an Eyewear</h4>

      {listings.map((listing) => {
        
        <CardListing data={listing} />
      })}

    </Layout>
  )
}

export default myListing;