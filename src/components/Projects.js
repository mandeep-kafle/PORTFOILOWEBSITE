import React from 'react';


import './Projects.css';
import CardItem from './CardItem';
function Projects() {
    return (
        <div className='cards'>
        <h1>PROJECTS</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
            
           
              <CardItem
                src='images/moviereviews.png'
                text='Movie review website where user can view reviews of latest movies'
                label='Reactjs and TMDB API'
                path='https://movies-web-44b07.web.app/'
                path2='https://github.com/mandeep-kafle/movie-reviews'
              />

            <CardItem
                src='images/firegram.png'
                text='Firegram clone of social media app Instagram where user can read feed and post images with user authentication'
                label='Reactjs and Firebase'
                path='https://instagramclone-d25cc.web.app/'
                path2='https://github.com/mandeep-kafle/instagram-clone'
              />
             
            </ul>
            <ul className='cards__items'>
            <CardItem
                src='images/blog.gif'
                text='Blog Website With CRUD functionality'
                label='MERN Stack'
                path=''
                path2='https://github.com/mandeep-kafle/mernapp'
              />
          

               <CardItem
                src='images/apod.png'
                text='View Astronomy Image of the day by NASA and previous images with an immersive UI'
                label='Reactjs and NASA API'
                path='https://spacify-9e85f.web.app/'
                path2='https://github.com/mandeep-kafle/spacify'
              />
             
              <CardItem
                src='images/fifa17.jpg'
                text='Data analysis on FIFA17 Game dataset with ML libraries'
                label='PYTHON'
                path=''
                path2=''
              />

          
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Projects
