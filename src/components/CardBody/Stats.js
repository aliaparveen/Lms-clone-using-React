import React from 'react'
import './stats.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faUserGroup} from '@fortawesome/free-solid-svg-icons';



function Stats({value, max}) {
  const heading= "Your Stats";
  const heading2="your attendance";
  const element = <FontAwesomeIcon icon={faUserGroup} />
    return (
    <div className='container whole'>
       <h6 className='headingstats'>{heading}</h6>

        <div className='main'>
        <div className='icondiv'>
        <i className='icon'>{element}</i>
        </div>

        <div className='main2'>
            <span className='heading2'>{heading2}</span>
            <p className='para'><span className='value'>{value}</span> out of {max}</p>
        </div>
        </div>
    </div>
  )
}

export default Stats