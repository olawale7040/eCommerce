import React from 'react';
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component';


const collectionPreview = ({title, items}) => {
    return (
      <div className='collection-preview'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <div className='preview'>
         { 
         items.filter((item,index) => index <4)
         .map(({id, ...otherProps})=>(
          //  <div key={item.id}> {item.name}</div>
           <CollectionItem key={id} {...otherProps}/>
          ))
          }
        </div>
      </div>
    );
}




export default collectionPreview;