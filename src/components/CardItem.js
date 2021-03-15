import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

function CardItem(props) {
  return (
    <>
      <li className='cards__item' >
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Project Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>

                       
            <Tooltip title="View Website">
                <IconButton aria-label="hh">
                <WebIcon color="primary" fontSize="large" onClick={event =>  window.open(props.path)}/>
                </IconButton>

            </Tooltip>
            
            <Tooltip title="View Code on github">
                <IconButton aria-label="hh">
                <GitHubIcon color="primary" fontSize="large" onClick={event =>  window.open(props.path2)}/> 
                </IconButton>

            </Tooltip>
 
            

          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;