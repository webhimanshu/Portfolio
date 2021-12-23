import React from 'react'
import ProjectCard from './ProjectCard';
import './projects.css';
const Projects = () => {
    return (
        <div className="project-section">
            <div className='card-container'>           
           <ProjectCard  img="./img/pro1.png" title="Covid 19 tracker" about=" Covid 19 tracker is <b>react</b> application which will fetch covid api and show World Wide Corona Report  of totalconfirmed ,totalrecovered,totaldeath and you can also see corona report of any country and last 7 days data all data present using linegraph. "/>
           
           <ProjectCard img="./img/pro7.png" title="Portfolio"   about="This is Responsive Personal Portfolio website.and this project can perfectly fit in any  device .it contain my  projects and all skill set and contact information."/>
           
           <ProjectCard img="./img/pro2.png" title="Shopping Cart"   about="It will display products and several options. And change price when you select item, display
number of items in cart and display total price of items in cart."/>
           
           <ProjectCard img="./img/todo.png" title="To-do app"   about="Todo app developed using react where you can add  todo  delete todo and also you can update todo  all todo are stored using localstorage"/>
           <ProjectCard img="./img/pro4.png" title="Weather App"   about=" This project is developed using react it will show weather data  according to user input via fetching data from api.  "/>
           <ProjectCard img="./img/pro3.png" title="Responsive Landing Page"   about="This Landing page made using  React  to showcase my responsiveness design. in this  prject i have used react router for  component switching without reloading or refreshing page this landing is also responsive  which means its responsive tablet mode and also in mobile mode."/>
           <ProjectCard img="./img/pro5.png" title="Responsive Restaurent Page"   about="Restaurent web page which contain food item for brakefast ,lunch ,evening and  dinner. you can see food item of  category  with one click.this is for testing my knowledge of props and hwow to filter data." />
          
           <ProjectCard img="./img/techblog.png" title="Tech Blog"   about="In project user can publish post and user can see blog according to category. And if needed user can 
update blog. I used jQuery to dynamically send request to server. For backend I have used servlet to handle request 
and Jsp is used for show dynamic content on frontend." />
          
          <ProjectCard img="./img/notetaker.png" title="Note Taker"   about="It is simple web application where you can add notes and see all notes. For this project I 
have used servlet and Jsp and all notes are stored in database. For database operation I have used 
hibernate." />
          
           </div>

        </div>
    )
}

export default Projects
