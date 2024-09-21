// import { Button } from 'bootstrap'
import React from 'react'
import "./PageNotFound.css"

function PageNotFound() {
  return (
    <div className='hide-navbar'>
      <h1 className='p-4'>Page you are looking for does not exist</h1>
      <br />
      <button type='button' className='btn btn-primary'>Normal Bootstrap</button>
      <br />
      <a href="/">Home</a>
    </div>
  )
}

export default PageNotFound