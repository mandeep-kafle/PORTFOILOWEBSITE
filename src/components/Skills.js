import React from 'react'
import {Button} from '@material-ui/core';
import './Skills.css';

function Skills() {
    return (
        
            
       
        <div className= "skills__wrapper">
            <h1>TECHNICAL SKILLS</h1>
        <div className ="buttons__wrapper">
        <div className="top__row">

        
        <Button variant="contained" color="primary" fontSize="large">Datastructures</Button>
        <Button variant="contained" color="primary" fontSize="large">Algorithms</Button>
        <Button variant="contained" color="primary" size="small">  C++</Button>
        <Button variant="contained" color="primary" fontSize="large">C</Button>
        <Button variant="contained" color="primary" fontSize="large">Python</Button>
   
      
      </div>
      <div className="bottom__row">
        <Button variant="contained" color="primary" fontSize="large"> JavaScript</Button>
        <Button variant="contained" color="primary" fontSize="large">HTML</Button>
        <Button variant="contained" color="primary" fontSize="large">CSS</Button>
      </div>

      </div>
     </div>
        
    )
}

export default Skills
