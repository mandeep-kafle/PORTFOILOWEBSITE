import React from 'react'
import  { LinkedInIcon,GitHubIcon,FacebookIcon} from '@material-ui/icons';
function Education() {
    return (
        <div className='body__wrapper'>
            <video src='' autoPlay loop muted/>
            <h1>Mandeep Kafle</h1>
            <p>hello world</p>
            <div className ='follow__icons'>
                <LinkedInIcon color="secondary" fontSize="large" onClick={event =>  window.location.href='https://www.linkedin.com/in/mandeep-kafle/'}/>
                <GitHubIcon color="primary" fontSize="large" onClick={event =>  window.location.href='https://github.com/mandeep-kafle'}/>
                <i class="fab fa-stack-overflow" onClick={event =>  window.location.href='https://github.com/mandeep-kafle'}/>
                <FacebookIcon color="secondary" fontSize="large" onClick={event =>  window.location.href='https://www.facebook.com/mandeep.kafle'}/>
                
            </div>
        </div>
    )
}

export default Education
