import './SearchHeaderStyle.css'
import PropTypes from 'prop-types';

const SearchHeader = ({search}) => {
    const handleFormSubmit = (event) => {
        search("Zafer İntepe");
        event.preventDefault();
    }
  return (
    <div className="formContainer">
        <form onSubmit={handleFormSubmit}>
            <label>Ne Arıyorsunuz?</label>
            <input type="text" />
        </form>
    </div>
  )
}


SearchHeader.propTypes = {
  search: PropTypes.func.isRequired  // FIXME: search fonksiyonu zorunlu ve bir fonksiyon olmalı
};

export default SearchHeader
