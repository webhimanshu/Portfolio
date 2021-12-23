import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header';
import  Projects from './Components/Projects/Projects';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';
import Contact from './Contact/Contact';
const Portfolio = () => {
    return (
        <>
         
            <Router>
            <Navbar/>
         
                <Switch>
               
               
                    <Route path="/"  exact component={Header}/>
                    <Route path="/projects"  exact component={Projects}/>
                    <Route path="/skills"  exact component={Skills}/>
                    <Route path="/about"  exact component={About}/>
                    <Route path="/contact"  exact component={Contact}/>
                    
                </Switch>
                
            </Router>

            
        </>
    )
}

export default Portfolio
