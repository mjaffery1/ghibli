import React from 'react'


function MovieList(props) {
const movieData = props.data;

const movies = props.data.map((movie, index) => {
    return(
        <div>
        {movie.title}
        </div>
    
    )
})
    return(
        
        <div>
        {/* <ul>{movies} </ul> */}
        
        
        </div>
    )
    
}

export default MovieList