import { useState, useEffect } from "react"
import getGif from "../helpers/getGifs";
import getGifs from '../helpers/getGifs'

export const useFetchGifs = (categoriaName) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    const [imgs, setImgs] = useState([])
    useEffect(() => {
        getGif(categoriaName)
            .then( img => {
            
                setState({
                    data: img,
                    loading: false,
                })
                
            });

    }, [categoriaName])


    return state;
}