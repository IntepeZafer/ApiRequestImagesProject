import axios from 'axios';
const searchImages = async (event) => {
    const response = await axios.get('https://api.unsplash.com/search/photos/' , {
        headers:{Authorization : 'Client-ID HSmPdt2DqO6P5MSlkoegYgvdCtXlbeteCWt3GQFo5Lk'},
        params:{query:event}
    })
    return response.data.results;
}
export default searchImages;