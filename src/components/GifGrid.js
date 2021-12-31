import React, { useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({categoriaName}) => {

    const {loading, data:imgs} = useFetchGifs(categoriaName);


    return (
        <>
            <h3>{categoriaName}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}
            <div className='card-grid'>  
                {
                    imgs.map((img) => (
                        <GifGridItem 
                            key={img.id}
                            {...img} />
                    ))
                }
            </div>
        </>

    )
};

export default GifGrid;
