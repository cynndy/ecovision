import React from 'react'
import Image from 'next/image'

const RecentListing = () => {
  return (
      <div className="card">
        <h1>Recent Listings></h1>
        <img className="product--image" 
          src="https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
          alt="product image" />
        <h2>Yellow Sunglass</h2>
          <p className="price">$20</p>
          <p>Some description about the product...</p>
        <img className="product--image" 
          src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product image" />
        <h2>Black Sunglass</h2>
          <p className="price">$15</p>
          <p>Some description about the product...</p>
        <img className="product--image" 
          src="https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
          alt="product image" />
        <h2>Yellow Sunglass</h2>
          <p className="price">$20</p>
          <p>Some description about the product...</p>
      </div>
      
  )
}

export default RecentListing
