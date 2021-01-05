import React from 'react'

const Join = () => {
    return (
        <>
        <h2>Join and Get Involved</h2>
        <section>
            <p>Open Columbia County was formed to make Columbia County and even better place by giving volunteers a way to use their skills and collaborate with one another Our mission is:
                <blockquote>
                    To use digital media and applications to help our community thrive.
                </blockquote>
            </p>
            <p>In order to make this happen we need project and the volunteers to create and sometimes run them. Volunteers don't need to know how to create websites, or be a data scientist (although we can always use those), they are folks that see a problem and have an idea on how to solve it or just want to help find and idea.  Anyone at any skill level can join (we do ask that you be over 16 years old.)</p>
        </section>
        <section>
            <h3>Ways to Connect:</h3>
            <div className='connect'>
                <p>We have 2 types of ways to join:
                    <ol>
                        <li>Volunteer Member
                            <ul>
                                <li>As a volunteer you would have a few extra accesses so you can help with the projects in a more hands on way</li>
                                <li  id='membership'>Fill out this form to become a volunteer</li>
                                <li>
                                    <a href='https://forms.gle/vqc4Z1ezjPZvjFGg8' target='_blank' rel='noreferrer'>
                                        <img src='https://images.thehive-services.com/open-columbia-co/join.jpg' alt='join' />
                                        <span>Join our Team</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>Community Member
                            <ul>
                                <li>You can still join in on the conversations and meetings, but you prefer to just listen in and don't need to see the technical stuff</li>
                            </ul>
                        </li>
                    </ol>
                    Either option we will be more than happy to have you with us.  All the links below are open to EVERYONE.
                </p>
            </div>
            <div className='connect'>
                <p>Have a suggestion for a project? We have a form for that:
                    <ul>
                        <li>
                            <a href='https://forms.gle/PuizMp6XknYciu1y5' target='_blank' rel='noreferrer'>
                                <img src='https://images.thehive-services.com/open-columbia-co/suggest.jpg' alt='suggest' />
                                <span>Suggest a Project</span>
                            </a>
                        </li>
                    </ul>
                </p>
            </div>
            <div className='connect'>
                <h4>Join our Meetup group</h4>
                <p>Here we will have live meetings (currently virtually only) where we can get to know each other, pass idea's around, help with projects, and more.</p>
                <ul>
                    <li>
                        <a href='https://www.meetup.com/open-columbia-co/' target='_blank' rel='noreferrer'>
                            <img src='https://images.thehive-services.com/open-columbia-co/meetup.png' alt='meetup' />
                            <span>Meetup</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='connect'>
                <h4>Join the discussions</h4>
                <p>We have both a Slack Workspace as well as a Discord Server that are open to the public to join. Click and join in and see what we are talking about.</p>
                <ul>
                    <li>
                        <a href='https://communityinviter.com/apps/opencolumbiacounty/join' target='_blank' rel='noreferrer'>
                            <img src='https://images.thehive-services.com/open-columbia-co/slack.jpg' alt='slack icon' />
                            <span>Slack</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://discord.com/invite/97yu35EfzB' target='_blank' rel='noreferrer'>
                            <img src='https://images.thehive-services.com/open-columbia-co/discord.jpg' alt='discord icon' />
                            <span>Discord</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='connect'>
                <h4>Social Media</h4>
                <p>Like any good group we have a few social media accounts that you can follow as well.</p>
                <ul>
                  <li>
                      <a href='https://www.facebook.com/openColumbiaCounty' target='_blank' rel='noreferrer'>
                        <img src='https://images.thehive-services.com/open-columbia-co/facebook.png' alt='facebook' />
                        <span>Facebook Page</span>
                      </a>
                    </li>
                  <li>
                    <a href='https://twitter.com/OpenColumbiaCo' target='_blank' rel='noreferrer'>
                        <img src='https://images.thehive-services.com/open-columbia-co/twitter.png' alt='twitter' />
                        <span>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/opencolumbiaco/' target='_blank' rel='noreferrer'>
                        <img src='https://images.thehive-services.com/open-columbia-co/instagram.png' alt='twitter' />
                        <span>Instagram</span>
                    </a>
                  </li>  
                </ul>
            </div>
        </section>
        <section>
            <div className='connect'>
                <h4>Open Source material</h4>
                <p>All of our projects are open source and they are on github.  Regardless of the type of membership you wish to be, you can view our Github Organization.  Thats what open source means after all.  As a volunteer member you would have better direct access to update and contribute to the projects, but anyone can help.</p>
                <ul>
                    <li>
                        <a href='https://github.com/Open-Columbia-County' target='_blank' rel='noreferrer'>
                            <img src='https://images.thehive-services.com/open-columbia-co/my-octocat.png' alt='github' />
                            <span>Github Organization</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Join