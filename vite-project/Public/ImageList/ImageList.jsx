import PropTypes from 'prop-types';
import ImageItem from '../ImageItem/ImageItem';
function ImageList({imagesPlaceholder}) {
    return ( 
        <div>
            {
                imagesPlaceholder.map((image , index)=>{
                   return <ImageItem key={index} image={image}/>
                })
            }
        </div>
     );
}

ImageList.propTypes = {
    imagesPlaceholder: PropTypes.array.isRequired, // search bir fonksiyon ise bu şekilde tanımlanır
};

export default ImageList;