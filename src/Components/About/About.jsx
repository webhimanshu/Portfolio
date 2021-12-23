import React from 'react'
import './about.css'
const About = () => {
    return (
        <div className='about'>
         <div className='photo-section'>
            <img src="./img/pro.JPG"/>
         </div>
         <div className='bio-section'>
            <p className='para'>About <span>Me</span></p>
            <p>I am a passionate Full Stack Software developer and I interested to study updated technologies and tackle complex problems. I completed my Bachelors in Computer Science Engineering. My technical  skills which will use to support the growth of the organization as well as myself.


</p>
<div>
<button className='btn1'>Hire me</button>
 <a className='btn2' href="./img/Resume.pdf" title="" download>Download cv</a>
 </div>    
         </div>
         
        </div>
    )
}

export default About
