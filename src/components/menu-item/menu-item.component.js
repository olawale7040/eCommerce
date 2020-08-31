import React from 'react';

import './menu-item.styles.scss'


const MenuItem =({title,imageUrl,size})=>{
    return (
        <div className={`${size} menu-item`}
            
        >
            <div
            style={{backgroundImage:`url(${imageUrl})`}}
              className="background-img"
            />
                  <div className='content'>
                    <div className='title'>{title}</div>
                    <span className='subtitle'>SHOP NOW</span>
                  </div>
         </div>
    );
}


export default MenuItem;