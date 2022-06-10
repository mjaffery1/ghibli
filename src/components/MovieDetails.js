import React from "react";
import { useParams } from "react-router-dom";

function MovieDetails(props) {
  const { title } = useParams();
  const movie = props.data.find((mov) => mov.original_title === title);
  return (
    <div className="details-container">
      <img
        className="movie-banner"
        src={movie.movie_banner}
        alt="movie banner"
      />
      <div className="test">
        <div className="movie-info">Director: {movie && movie.director}</div>
        <div className="movie-info">
          Release Year: {movie && movie.release_date}
        </div>
        <div className="movie-info">Movie Title: {movie && movie.title}</div>
        <div className="movie-info">
          Original Title: {movie && movie.original_title_romanised}
        </div>
        <div className="movie-info">
          Movie Description: {movie && movie.description}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
