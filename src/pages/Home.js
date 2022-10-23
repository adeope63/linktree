import React from 'react'
import logo from '../profile__img.png';
import "./Home.css"
import icon from '../Icon.png'
import git from "../git-Icon.png"
import slack from "../slack.png"
import share from '../share.png'
import zuri from '../Vector.png'
import I4G from '../I4G.png'



function Home() {
    return (
        <div className='mainContainer'>
            {/* <main className='mainContainer'> */}

                <div className='profile'>
                    <img className='profile-img' id='profile__img' src={logo} />
                    <h2 className='profile-title' id='twitter'>Adeope63</h2>
                    <img className='profile-icon' src={icon} />
                    <img className='profile-share' src={share} />
                    <p id='slack'>Adeope63</p>
                </div>

                <section className='links'>

                    {/* <div className='link'> */}
                        <a href='https://twitter.com/Adeope63' target="_blank">Twitter Link</a>
                    {/* </div> */}

                    {/* <div  className='link'> */}
                        <a id='btn__zuri' href='https://training.zuri.team' target="_blank">Zuri Team</a>
                    {/* </div> */}

                    {/* <div  className='link'> */}
                        <a id='' href='https://books.zuri.team'>Zuri Books</a>
                    {/* </div> */}

                    {/* <div  className='link'> */}
                        <a id='' href='https://books.zuri.team/python-for-beginners?ref_id=adeope63'>Python Books</a>
                    {/* </div> */}

                    {/* <div  className='link'> */}
                        <a id='' href='https://background.zuri.team'>Background Checks for Coders</a>
                    {/* </div> */}

                    {/* <div  className='link'> */}
                        <a id='' href='https://books.zuri.team/design-rules'>Design Books</a>
                    {/* </div> */}

                    <div className='add'>
                        <img className='slack' src={slack} />
                        <img className='git' src={git} />

                    </div>

                </section>

                <footer className='footer'>
                    <img className='zuri' src={zuri} />
                    <span>HNG Internship 9 Frontend Task</span>
                    <img className='i4g' src={I4G} />
                </footer>
        </div>
    )
}

export default Home

