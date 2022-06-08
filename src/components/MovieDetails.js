import React from 'react'

function MovieDetails(props) {
    return(
        <div className='details-container'>
            <div>
                Movie Description: {props.movie.description}
            </div>
            <div>
                Director: {props.movie.director}
            </div>
            <div>
                Release Year:{props.movie.release_date}
            </div>
            <div>
               Movie Title: {props.movie.title}
            </div>
            <div>
                Original Title: {props.movie.original_title_romanised}
            </div>
            <div>
                Characters: <a href={props.movie.people}></a> 
            </div>
        </div>
    )
}

export default MovieDetails