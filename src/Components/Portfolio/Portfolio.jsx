import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import './portfolio.css'
function Portfolio() {
    const data = [
        {
            id:1,
            image:IMG1,
            title:'Netflix clone',
            github:'https://github.com/Abdul-saleem10/Netflix-clone',
            demo:'https://github.com/Abdul-saleem10/Netflix-clone',
        },
        {
            id:2,
            image:IMG2,
            title:'IntaPlay',
            github:'https://github.com/Abdul-saleem10/InstaPlay',
            demo:'https://instaplaybro.netlify.app/',
        },
        {
            id:3,
            image:IMG3,
            title:'CoronaVirus Tracker',
            github:'https://github.com/Abdul-saleem10/CoronaVirusTracker',
            demo:'https://github.com/Abdul-saleem10/CoronaVirusTracker',
        },
        {
            id:4,
            image:IMG4,
            title:'Portfolio',
            github:'https://github.com/Abdul-saleem10/AudioBookReader',
            demo:'https://github.com/Abdul-saleem10/AudioBookReader',
        },
        {
            id:5,
            image:IMG5,
            title:'Text to Audio',
            github:'https://github.com/Abdul-saleem10/TexttoAudio',
            demo:'https://github.com/Abdul-saleem10/TexttoAudio',
        },
        {
            id:6,
            image:IMG6,
            title:'Chatting Application',
            github:'https://github.com/Abdul-saleem10/Chat-Application',
            demo:'https://github.com/Abdul-saleem10/Chat-Application',
        }
    ]
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
            {data.map((e,i)=>
            <article key={e.id} className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src={e.image} alt="img1"/>
                </div>
                <h3>{e.title}</h3>
                <div className="portfolio_item-cta"> 
                <a href={e.github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={e.demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
            </article>
            )}
        </div>
    </section>
  )
}

export default Portfolio