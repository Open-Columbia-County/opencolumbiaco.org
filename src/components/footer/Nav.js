import React from 'react'


const Nav = () => {

    return (
        <nav className='nav'>
            <div className='column1'>
                <h3>Contact</h3>
                <a href='mailto:hello@opencolumbiaco.org'>hello@opencolumbiaco.org</a>
            </div>
            <div className='column2'>
                <h3>Collaborate</h3>
                <a href='https://forms.gle/PuizMp6XknYciu1y5' target='_blank' rel='noreferrer'>Suggest a Project</a>
                <a href='https://forms.gle/DPtgDicWJMydUEro6' target='_blank' rel='noreferrer'>Help with a project</a>
            </div>
            <div className='column3'>
                <h3>Connect</h3>
                <a href='https://forms.gle/vqc4Z1ezjPZvjFGg8' target='_blank' rel='noreferrer'>Join our Team</a>
                <a href='https://www.meetup.com/open-columbia-co/' target='_blank' rel='noreferrer'>Meetup</a>
                <a href='https://github.com/Open-Columbia-County' target='_blank' rel='noreferrer'>Github</a>
                <a href='https://www.facebook.com/openColumbiaCounty' target='_blank' rel='noreferrer'>Facebook Page</a>
                <a href='https://twitter.com/OpenColumbiaCo' target='_blank' rel='noreferrer'>Twitter</a>
            </div>
        </nav>
    )
}

export default Nav