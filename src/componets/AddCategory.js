import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        //Se obtiene el valor del input y se guarda en el setState
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2 ){
            setCategories(cats => [inputValue, ...cats]) 
            setInputValue('')
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}


//Se valida que el componente recibe lo que necesita
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}