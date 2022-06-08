import React from "react";

function MovieCard(props) {
 
  return (
    <div className="container">
      <div className="movie"></div>
      <div>
      <h1>{props.movie.title}</h1>
      </div>

      <div className="film-year">
      <p>{props.movie.release_date}</p>

      </div>

      <div className="movie-poster">
      <img src={props.movie.image} alt={props.movie.title}></img>
      </div>
      <div>
      </div>
    </div>
  );
}

export default MovieCard;
