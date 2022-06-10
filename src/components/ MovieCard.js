import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
//   if (!movie) {
//     return;
//   }
  return (
    <Link to={`/movie/${movie.original_title}`}>
      <div className="card-container">
        <img className="movie-poster" src={movie.image} alt={movie.title}></img>
      </div>
    </Link>
  );
}

export default MovieCard;
