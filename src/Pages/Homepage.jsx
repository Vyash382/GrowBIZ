import React from 'react'
import Navbar from '../Components/Navbar'
import NewsHeadlines from './NewsHeadlines'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <h1>TOP BUSINESS HEADLINES TODAY!</h1>
      <NewsHeadlines />
    </div>
  )
}

export default Homepage
