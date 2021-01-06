import React from 'react'


const Nav = () => {

    return (
        <nav className='nav'>
            <div className='column1 column'>
                <h3>Contact</h3>
                <a href='mailto:hello@opencolumbiaco.org'>hello@opencolumbiaco.org</a>
            </div>
            <div className='column2 column'>
                <h3>Collaborate</h3>
                <button>
                    <a href='https://forms.gle/PuizMp6XknYciu1y5' target='_blank' rel='noreferrer'>
                        <img src='https://images.thehive-services.com/open-columbia-co/suggest.png' alt='suggest' />
                        <span>Suggest a Project</span>
                    </a>
                </button>
                <button>
                <a href='https://forms.gle/DPtgDicWJMydUEro6' target='_blank' rel='noreferrer'>
                    <img src='https://images.thehive-services.com/open-columbia-co/help.png' alt='help' />
                    <span>Help with a project</span>
                </a>
                </button>
                <button>
                    <a href='https://github.com/Open-Columbia-County' target='_blank' rel='noreferrer'>
                        <img src='https://images.thehive-services.com/open-columbia-co/my-octocat.png' alt='github octocat' />
                        <span>GitHub</span>
                    </a>
                </button>
            </div>
            <div className='column3 column'>
                <h3>Connect</h3>
                <button>
                    <img src='https://images.thehive-services.com/open-columbia-co/join.jpg' alt='join' />
                    <a href='https://forms.gle/vqc4Z1ezjPZvjFGg8' target='_blank' rel='noreferrer'>
                        <span>Join our Team</span>
                    </a>
                </button>
                <button>
                    <img src='https://images.thehive-services.com/open-columbia-co/meetup.png' alt='meetup' />
                    <a href='https://www.meetup.com/open-columbia-co/' target='_blank' rel='noreferrer'>
                        <span>Meetup</span>
                    </a>
                </button>
                <button>
                    <img src='https://images.thehive-services.com/open-columbia-co/facebook.png' alt='facebook' />
                    <a href='https://www.facebook.com/openColumbiaCounty' target='_blank' rel='noreferrer'>
                        <span>Facebook Page</span>
                    </a>
                </button>
                <button>
                    <img src='https://images.thehive-services.com/open-columbia-co/twitter.png' alt='twitter' />
                    <a href='https://twitter.com/OpenColumbiaCo' target='_blank' rel='noreferrer'>
                        <span>Twitter</span>
                    </a>
                </button>
            </div>
        </nav>
    )
}

export default Nav