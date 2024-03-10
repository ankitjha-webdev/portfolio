import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
// import { Visitor } from '../visitor/Visitor';
// import { FaAngellist } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {/* <div className='visits'>
      <Visitor/>
       <small>Total Visits</small>
      </div> */}
      <a href="https://www.linkedin.com/in/ankitkumarcse/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/ankitjha-webdev" target="_blank" rel="noreferrer" ><FaGithub /></a>
      {/* <a href="https://angel.co/u/meri-gogichashvili" target="_blank" rel="noreferrer" ><FaAngellist /></a> */}
    </div>
  )
}

export default HeaderSocials