import { useState } from 'react';
import './SearchHeaderStyle.css'
import PropTypes from 'prop-types';

const SearchHeader = ({search}) => {
  const [valueInput, setValue] = useState('');
  const handleFormSubmit = (event) => {
      search(valueInput);
      event.preventDefault();
  }  
  const handleChange = (event) => {
      setValue(event.target.value);
  }
  return (
    <div className="formContainer">
        <form onSubmit={handleFormSubmit}>
            <label>Ne Arıyorsunuz?</label>
            <input type="text" value={valueInput} onChange={handleChange}/>
        </form>
    </div>
  )
}


SearchHeader.propTypes = {
  search: PropTypes.func.isRequired  // FIXME: search fonksiyonu zorunlu ve bir fonksiyon olmalı
};

export default SearchHeader
