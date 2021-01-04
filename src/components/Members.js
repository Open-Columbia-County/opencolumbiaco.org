import React from 'react'

const Members = () => {
    return (
        <>
        <h2>Our Members</h2>
        <div className='member'>
            <h4>Brigade Team:</h4>
            <a href='mailto:hello@opencolumbiaco.org'>hello@opencolumbiaco.org</a>
        </div>
        <div className='member'>
            <h4>Brigade Captain</h4>
            <div className='member-id'>
                <h5>Melissa Longenberger</h5>
                <img src='https://images.craftsnherbs.com/new-melissa.jpg' alt='Melissa' />
            </div>
            <ul>
                <li>Brigade Email: <a href='mailto:melissa@opencolumbiaco.org'>melissa@opencolumbiaco.org</a></li>
                <li>Personal Email: <a href='mailto:melissalongenberger24@gmail.com'>melissalongenberger24@gmail.com</a></li>
                <li><a href='https://www.linkedin.com/in/melissa-longenberger/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Btv12hRH8RdKSqZBy6nOUnA%3D%3D' target='_blank' rel='noreferrer'>LinkedIn</a></li>
            </ul>
        </div>
        <div className='member'>
            <h4>Social Media Lieutenant</h4>
            <ul>
                <li>Brigade Email: <a href='mailto:social@opencolumbiaco.org'>social@opencolumbiaco.org</a></li>
                <li>Brigade LinkedIn: <a href='https://www.linkedin.com/company/open-columbia-county/' target='_blank' rel='noreferrer'>Link</a></li>
                <li>Twitter: <a href='https://twitter.com/OpenColumbiaCo' target='_blank' rel='noreferrer'>Link</a></li>
                <li>Facebook: <a href='https://www.facebook.com/openColumbiaCounty' target='_blank' rel='noreferrer'>Link</a></li>
                <li>Instagram: <a href='https://www.instagram.com/opencolumbiaco/' target='_blank' rel='noreferrer'>Link</a></li>
            </ul>
        </div>
        <div className='member'>
            <h4>Website Quartermaster:</h4>
            <ul>
                <li>Brigade Email: <a href='mailto:webmaster@opencolumbiaco.org'>webmaster@opencolumbiaco.org</a></li>
                <li>GitHub Profile: <a href='https://github.com/opencolumbiaco' target='_blank' rel='noreferrer'>Link</a></li>
                <li>GitHub Organization: <a href='https://github.com/Open-Columbia-County' target='_blank' rel='noreferrer'>Link</a></li>
            </ul>
        </div>
        <div className='member'>
            <h4>Safety Officer</h4>
            <a href='mailto:safespace@opencolumbiaco.org'>safespace@opencolumbiaco.org</a>
        </div>
        </>
    )
}

export default Members