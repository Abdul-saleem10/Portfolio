import React, { useRef,useEffect } from 'react'
import CTA from './CTA'
import ME from "../../assets/me.png"
import Headersocials from './Headersocials'
import './header.css'

function Header() {
  const textRef = useRef();

  useEffect(() => {
    // init(textRef.current, {backDelay: 1500, backSpeed:60, showCursor: false, strings: ['Developer','Web Developer', 'Fullstack Developer' ] })
  }, [])
  
  return (
   <header id='home'>
    <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Abdul Saleem</h1>
        <h5 className='text-light' ref={textRef}>Fullstack Developer</h5>
        <CTA/>
        <Headersocials/>
        <div className="me">
            <img src={ME} alt="ME"/>
        </div>
        <a href='#footer' className='scroll_down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header