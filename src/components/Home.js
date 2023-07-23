import React from 'react';
import vg from "../assets/2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'

import "../styles/home.scss"

function Home() {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solution All Problem</p>
        </main>
    </div>

    <div className='home2' id='about'>
        <img src={vg} from alt='Graphic'/>
        <div> 
            <p>want to say some thing and want to some help
                 then feel free to say without hasintation.
            </p> 
        </div>
    </div>

    <div className='home3'>
        <div>
            <h1>Who are You</h1>
            <p>Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software,
            quantum computing, e-commerce, and consumer electronics.</p>
        </div>
    </div>

    <div className='home4' id="brands">
        <div>
            <h1>All Brands</h1>
            
            <article>
                <div style={{animationDelay:"0.3s"}}>
                <AiFillGoogleCircle/>
                <p>Google</p>
                </div>

                <div style={{animationDelay:"s0.5"}}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
                </div>

                <div style={{animationDelay:"0.7s"}}>
                <AiFillYoutube/>
                <p>YouTube</p>
                </div>

                <div style={{animationDelay:"1s"}}>
                <AiFillInstagram/>
                <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home