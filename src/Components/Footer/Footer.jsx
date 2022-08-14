import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import{FaFacebook} from 'react-icons/fa'
import{FiInstagram} from 'react-icons/fi'
import{IoLogoTwitter} from 'react-icons/io'
import './footer.css'

function Footer() {
  return (
    <footer id='footer'>
        <a href="#home" className='footer_logo'>ABDUL SALEEM</a>
        <ul className='permalinks'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#testimoniuals'>Testimoniuals</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        <div className="footer_socials">
            <a href='https://www.linkedin.com/in/abdul-saleem-61a11b185/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href='https://github.com/Abdul-saleem10' target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href='https://www.facebook.com/abdulsaleem1248'  target="_blank" rel="noreferrer"><FaFacebook/></a>
            <a href='https://www.instagram.com/mdsaleem10/'  target="_blank" rel="noreferrer"><FiInstagram/></a>
            <a href='https://twitter.com/Abdulsaleem1248'  target="_blank" rel="noreferrer"><IoLogoTwitter/></a>
        </div>
        <div className="footer_copyright">
            <small>&copy; saleem.All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer