import axios from 'axios'
const searchImages = async (event) => {
    const response = await axios.get('https://api.unsplash.com/search/photos' , {
      headers : {Authorization : 'Client-ID ZJd2NMPGxMUwONRPqHsuzgy-g_B8Prlc0DOPH1Lp1QQ'},
      params: {query: event},
    });
    return response.data.result;
  };
  export default searchImages;