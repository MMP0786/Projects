import React from 'react'
import { Link } from 'react-router-dom'
// import { HashLink } from 'react-router-hash-link'

function Header() {
  return (
    <nav>
        <h1>TechyStar</h1>
        <main>
            <Link to={'/#home'}>Home</Link>
            <Link to={'/#about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/#brand'}>Brand</Link>
            {/* <HashLink to={'#brands'}>Brand</HashLink> */}
            <Link to={'/services'}>Sevices</Link>
        </main>
    </nav>
  )
}


export default Header