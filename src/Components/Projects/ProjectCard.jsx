import React from 'react'
import './projects.css';
const ProjectCard = ({title,img,about}) => {
    return (
       <> 
<div class="card">
  <img src={img} alt="Project" />
  <div class="container">
    <h4><b>{title}</b></h4> 
    <p>{about}</p> 
  </div>
</div>


</>
    )
}

export default ProjectCard
