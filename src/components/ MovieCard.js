import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  if (!movie) {
    return;
  }
  return (
    <Link to={`/movie/${movie.original_title}`}>
      <div className="card-container">
        {/* <div className="poster-container"> */}
        {/* <h1>{props.movie.title}</h1>
      <p>{props.movie.release_date}</p> */}
        <img className="movie-poster" src={movie.image} alt={movie.title}></img>
      </div>
    </Link>
  );
}

export default MovieCard;
