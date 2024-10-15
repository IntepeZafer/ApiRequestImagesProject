import PropTypes from 'prop-types';
import './SearchHeader.css'
function SearchHeader({search}) {
    const handleFormSubmit = (event) => {
        search("Hello World");
        event.preventDefault();
    }
    return ( 
        <div className='formContainer'>
            <form onSubmit={handleFormSubmit}>
                <label>Neyi Arıyorsunuz ?</label>
                <input type="text" />
            </form>
        </div>
     );
}

SearchHeader.propTypes = {
    search: PropTypes.func.isRequired, // search bir fonksiyon ise bu şekilde tanımlanır
};

export default SearchHeader;