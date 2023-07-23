import React from 'react'
import p1 from "../assets/3.jpg"
import p2 from "../assets/4.jpg"
import "../styles/services.scss"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"


function Services() {
  return (
    <div className='service'>
        <Carousel>
        <div>
          <img src={p1} alt='Item1'/>
          <p className='legend'>Full Stack</p>
        </div>

        <div>
          <img src={p2} alt='Item2'/>
          <p className='legend'> peer to peer support</p>
        </div>
        </Carousel>
    </div>
  )
}

export default Services