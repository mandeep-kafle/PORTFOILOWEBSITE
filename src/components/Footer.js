import React from 'react';
import './Footer.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';


function Footer() {
  return (
    <div className='footer-container'>
      
    
        
      
         
          <div class='social-icons'>
          <Tooltip title="View Profile on Linkedin">
                    <IconButton aria-label="f">
                    <LinkedInIcon color="primary" fontSize="large" onClick={event =>  window.open('https://www.linkedin.com/in/mandeep-kafle/')}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="View code on github">
                    <IconButton aria-label="Follow me on facebook">
                    <GitHubIcon color="primary" fontSize="large" onClick={event =>  window.open('https://github.com/mandeep-kafle')}/>
                    s
                    </IconButton>
                </Tooltip>
                <Tooltip title="Follow">
                    <IconButton aria-label="Follow me on facebook">
                    <FacebookIcon color="primary" fontSize="large" onClick={event =>  window.open('https://www.facebook.com/mandeep.kafle')}/>
                    </IconButton>
                </Tooltip>
          </div>
          <p>Contact @ 9877946059</p>
        </div>
    
  );
}

export default Footer;
