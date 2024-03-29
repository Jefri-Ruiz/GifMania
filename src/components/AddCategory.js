import React,{ useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // trim sirve para borrar los espacios en blanco antes y despues
        if (inputValue.trim().length > 2) {
            // como no pase categories en props puedo hacerle referencia de la siguiente forma
            setCategories(cats =>[ inputValue, ...cats])
            setInputValue('');
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange}
            />
        </form>
    )

    
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}