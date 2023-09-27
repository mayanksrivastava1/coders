import React from 'react'
import './Commmunity.css'
export default function Community() {
  return (
        <div className='container'>
      <div className="rounded-image">
      <img src="./2.png" alt="Image with rounded corners" />
      <div className="image-text">
        Join our Community
      </div>
      <div className='image-text1'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, nam!
      </div>
      <div className='comm-input'>
            <input class="form-control me-2" type="search" placeholder="Enter Your Email" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
      </div>
    </div>
    </div>
  )
}
