import PropTypes from 'prop-types';
import { useState } from 'react';
import './SearchHeader.css'
function SearchHeader({search}) {
    const [valueInput, setValue] = useState('')
    const handleFormSubmit = (event) => {
        search(valueInput);
        event.preventDefault();
    }
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return ( 
        <div className='formContainer'>
            <form onSubmit={handleFormSubmit}>
                <label>Neyi Arıyorsunuz ?</label>
                <input type="text" value={valueInput} onChange={handleChange}/>
            </form>
        </div>
     );
}

SearchHeader.propTypes = {
    search: PropTypes.func.isRequired, // search bir fonksiyon ise bu şekilde tanımlanır
};

export default SearchHeader;