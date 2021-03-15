import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';


import './Top.css'
function Top() {
    return (
        
             <div className='body__wrapper'>
            <video src='videos/video1.mp4' autoPlay loop muted/>
            <h1>Mandeep Kafle</h1>
            <p>Lets build something amazing together</p>
            <div className ='follow__icons'>
                
               
                <Tooltip title="View Profile on Linkedin">
                    <IconButton aria-label="f">
                    <LinkedInIcon color="primary" fontSize="large" onClick={event =>  window.open('https://www.linkedin.com/in/mandeep-kafle/')}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="View code on github">
                    <IconButton aria-label="Follow me on facebook">
                    <GitHubIcon color="action" fontSize="large" onClick={event =>  window.open('https://github.com/mandeep-kafle/mandeepkafle')}/>
                    
                    </IconButton>
                </Tooltip>
                <Tooltip title="Follow">
                    <IconButton aria-label="Follow me on facebook">
                    <FacebookIcon color="primary" fontSize="large" onClick={event =>  window.open('https://www.facebook.com/mandeep.kafle')}/>
                    </IconButton>
                </Tooltip>
                
        
                
            </div>
        </div>
        
    )
}

export default Top
