import React from 'react'
import './skills.css';
const Bar = ({title,know}) =>
 {
     const data=
     {
         width:know,
         content:know,
     }
    return (
        <div className='bar'>
        <div className='info'>
            <span>{title}</span>
        </div>
        <div className='progress-line'>
        {/* <span></span>
        <span className='progess-data'>{know}</span>
         */}
        <div className='progress-data' style={{width:know}}>
           <span>{know}</span>
        </div>
        </div>
    </div>
    )
}

export default Bar
