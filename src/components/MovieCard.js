import React, {useState, useEffect} from 'react'
import { getMovies } from '../services/api';
const MovieCard = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        getMovies().then(data => {
            if(data) {
                let movies = data.homepage;
                console.log("MovieCard -> movies", movies)
                setMovie(movies)
            }
        })
    }, []);
    return (
        <div>
            {movie}
        </div>
    )
}

export default MovieCard
