import React from 'react'
import Bar from './Bar';
import './skills.css';
const Skills = () => {
    return (
        <>
        <div className='skills-section'>
        <div className='skills-bar '>
         <Bar  title="Java" know="75%"/>
         <Bar title="JavaScript" know="65%"/>
         <Bar   title="Sql" know="80%"/>
         <Bar title="React" know="60%"/>
         <Bar title="J2EE" know="85%"/>
         <Bar title="Css" know="79%"/>
         <Bar title="Hibernate" know="87%"/>
         <Bar   title="Html" know="75%"/>
      
         <Bar   title="Spring" know="65%"/>
         <Bar   title="Jdbc" know="78%"/>
          </div>
          


        </div>
        </>
    )
}

export default Skills
