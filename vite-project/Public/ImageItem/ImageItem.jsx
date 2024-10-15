import PropTypes from 'prop-types';
import './imageItemStyle.css'
function ImageItem({image}) {
    return ( 
        <div className='imageList'>
            <img src={image.urls.small} alt="" />
        </div>
     );
}

ImageItem.propTypes = {
    image: PropTypes.object.isRequired, // search bir fonksiyon ise bu şekilde tanımlanır
};

export default ImageItem;