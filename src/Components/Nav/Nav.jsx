import React from 'react'
import { useState } from 'react'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import './nav.css'

const Nav=()=> {
    const [activeNav,setActiveNav] = useState('0')
  return (
    <nav>
        <a href='#home' className={activeNav==='0'?'active':''}onClick={()=>setActiveNav('0')}><AiOutlineHome/></a>
        <a href='#about' className={activeNav==='#about'?'active':''} onClick={()=>setActiveNav('#about')}><AiOutlineUser/></a>
        <a href='#experience' className={activeNav==='#experience'?'active':''} onClick={()=>setActiveNav('#experience')}><BiBook/></a>
        <a href='#portfolio' className={activeNav==='#portfolio'?'active':''}onClick={()=>setActiveNav('#portfolio')}><RiServiceLine/></a>
        <a href='#contact' className={activeNav==='#contact'?'active':''}onClick={()=>setActiveNav('#contact')}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav