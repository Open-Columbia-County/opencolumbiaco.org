import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/join'>Join Us</Link>
        <Link to='/donate'>Donate</Link>
        </>
    )
}

export default NavBar