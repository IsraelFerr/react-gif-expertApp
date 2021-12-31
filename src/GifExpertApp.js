import React, {useState}from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';



const GifExpertApp = () => {

    // const categorias = ['MArio', 'TKM', 'DEMASIADO']
    const [categorias, setCategorias] = useState(['Luffy'])

    // const addCategoria = () => {
    //     setCategorias([...categorias, 'Tus Muertos en ALMIBAR'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategoria={setCategorias}/>
            <hr/>
            
        

            <ol>
                {
                    categorias.map((categoria) => (
                       <GifGrid 
                        key={categoria}
                        categoriaName={categoria}/>
                     ))
                }
            </ol>
        </>
    )
};

export default GifExpertApp;