import React from "react"

export default function Product () {
    return (
        <div className="card">
        <img className="product--image" 
            src="https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VuZ2xhc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" alt="product image" />
        <h2>Yellow Sunglass</h2>
        <p>Some descriptions about the product....</p>
        <p className="price">$25</p> 
        <p>
          <button>Buy Now</button>
        </p>
      </div>
    )
}