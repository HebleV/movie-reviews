import axios from 'axios';

export const getMovies = async () => {
    const API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;
    const url = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
    try {
        const response = await axios.get(url);
        console.log("getMovies -> response", response)
        const data = await response.data;
        return data;
    } catch (error) {
        console.log('error: ', error);
    }
};