import React from 'react'
import Sport from "./Sport"
import ICT from "./ICT"
import BgVideo from './BgVideo.jsx'
import Footer from './Footer'
import  Carousel from '../components/Carousel'

function Home() {
  return (
    <div>
    <Carousel />
    <BgVideo />
    <Sport />
    <ICT />
    <Footer />
    </div>
  )
}

export default Home