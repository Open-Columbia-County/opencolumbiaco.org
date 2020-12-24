import React from 'react'

import Nav from './Nav'
import Mobile from './Mobile'

const Header = () => {
    return (
        <>
        <div className='header'>
            <img src='https://images.thehive-services.com/open-columbia-co/coveredbridge04.jpg' alt='icon' />
            <h1>Open Columbia County</h1>
        </div>
        <nav>
            <Nav />
            <Mobile />
        </nav>
        </>
    )
}
export default Header