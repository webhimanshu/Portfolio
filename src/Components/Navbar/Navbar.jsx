 import React,{useState} from 'react'
 import './navbar.css'
import { Link } from 'react-router-dom'
 const Navbar = () =>
  {
      const [state, setstate] = useState(false)
     return (
         <>
        <div className='navbar'>
        <div className='logo'>
       <Link to="/"> <h1> Devoid </h1></Link>        
        </div>
        <div className={state ?'nav-menu active':'nav-menu '}>
            <ul >
            <li><Link to="/"  ><span><img src="./img/layers.png" alt="images"/></span>Home</Link></li>
                <li><Link to="/projects"><span><img src="./img/briefcase.png" alt="images"/></span>Projects</Link></li>
                <li><Link to="/skills"><span><img src="./img/laptop.png" alt="images"/></span>Skills</Link></li>
                <li><Link  to="/about"><span><img src="./img/about.png" alt="images"/></span>About</Link></li>
                <li><Link to="/contact"><span><img src="./img/user.png" alt="images"/></span>Contact</Link></li>
                
            </ul>
           
        </div>
        <div className='mobile' >
        
        <i  onClick={()=>setstate(!state)} className={state ?'fi-rr-cross-circle ':'fi-rr-apps '}></i>
            </div>
        </div>
         </>
     )
 }
 
 export default Navbar
 