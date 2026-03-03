import React from 'react'

function Cat({cat}) {
    const {id,title,description,image}=cat;
  return (
    <div className='cat'>
        <img src={image} width={150} height={150}/>
        <h4 className='title1'>{title}</h4>
        <h5 className='cat-desc'>{description}</h5>

    </div>
  )
}

export default Cat