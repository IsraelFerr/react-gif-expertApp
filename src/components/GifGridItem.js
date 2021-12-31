import React from 'react'

export const GifGridItem = ({title, id, img}) => {

    
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={img} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
