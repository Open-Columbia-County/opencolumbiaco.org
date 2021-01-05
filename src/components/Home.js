import React from 'react'

const Home = () => {
    return (
        <>
        <h2>A <a href='https://www.codeforamerica.org/'>Code for America</a> Brigade</h2>
        <div className='covid'>
            <h3>In-person Open CodeFest is on hold</h3>
            <p>So that we can protect loved ones as well as ourselves, out Open CodeFest's will be held vitually only for the time being.</p>
            <p>Looking to join or find out when our next Open CodeFest is?  Here is some information:
                <ul>
                    <li><a href='https://www.meetup.com/open-columbia-co/'>Join our Meetup Group</a></li>
                    <li><a href='https://communityinviter.com/apps/opencolumbiacounty/join' target='_blank' rel='noreferrer'>Join us on Slack</a></li>
                    <li><a href='https://discord.com/invite/97yu35EfzB' target='_blank' rel='noreferrer'>Join our Discord Server</a></li>
                </ul>
            </p>
            <p>With your help we hope that meeting virtually only is just a temperary phase.</p>
        </div>
        <div className='text'>
            <p>Open Columbia County addresses local social and civic challenges through creative uses of technology. Although we are part of Code for America, we're not solely focused on coding! We foster relationships between government, nonprofit, academic, for-profit companies, residents, civic technologists, analysts, designers, and many more. All are welcome! </p>
        </div>
        </>
    )
}

export default Home