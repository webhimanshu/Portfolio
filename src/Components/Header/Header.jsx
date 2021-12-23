import React from 'react'
import Social from '../Social/Social';
import './header.css';
const Header = () => {
    return (
        <>
            <div className='header-container'>
              <div className='about-section'>
               <h4>
               Hello There 👋,I am <br></br>
               <span className="info-name">Web Developer</span><br></br>
               <span> Born in Bihar,Living in Bengaluru</span><br></br>
               <span>Raised by  the 90's </span><br></br>
               <span>Now Available for you</span>
               </h4>
               
              </div>
              <div className='img-section'>
              <img src='./img/Coding-bro.svg' alt='img'/>
              </div>
            </div>
            <div className='social-network'>
            <Social  link="https://www.instagram.com/devoid27/" icon="./img/instagram.png"/>
             <Social  link="https://www.facebook.com/profile.php?id=100009650257685" icon="./img/facebook.png"/>
            <Social  link="https://github.com/webhimanshu" icon="./img/github.png"/>
            <Social  link="https://twitter.com/abey_himanshu" icon="./img/twitter.png"/>
            <Social  link="https://www.linkedin.com/in/himanshu-sharma-a2722518b/" icon="./img/linkedin.png"/>
             
            </div>
        </>
    )
}

export default Header
