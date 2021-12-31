import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategoria}) => {

    const [valor, setValor] = useState('')

    const changeValor = (v) => {
        setValor(v.target.value)
    }

    const submitValor = (e) => {
        e.preventDefault();

        if ( valor.trim().length > 2){
            setCategoria(cats => [valor,...cats])
            setValor('');
        }

    }

    return (
        <form onSubmit={(e) => {submitValor(e)}}>
            <input 
                type="text"
                value={valor}
                onChange={(v) => {changeValor(v)}}/>
        </form>
    )
}

AddCategory.propTypes = {
    setCategoria: PropTypes.func.isRequired
}


export default AddCategory;
