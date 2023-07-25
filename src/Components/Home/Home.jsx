import React from 'react'

import Header from "./Header/Header"
import Graph from "./Graph/Graph"
import Footer from "./Footer/Footer"

import "./Home.css"

function Home() {
  return (
    <div className='home'>
      <Header />
      <Graph />
      <Footer />
    </div>
  )
}

export default Home