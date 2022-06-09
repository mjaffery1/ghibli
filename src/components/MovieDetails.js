import React from 'react'
import { useParams } from 'react-router-dom'

function MovieDetails(props) {
    

    const {title} = useParams()
    const movie = props.data.find(mov => mov.original_title === title)
    console.log(movie)
    return(
        <div className='details-container'>
            <div>
                Movie Description: {movie && movie.description}
            </div>
            <div>
                Director: {movie && movie.director}
            </div>
            <div>
                Release Year:{movie && movie.release_date}
            </div>
            <div>
               Movie Title: {movie && movie.title}
            </div>
            <div>
                Original Title: {movie && movie.original_title_romanised}
            </div>
        </div>
    )
}

export default MovieDetails