import React from "react";
import { useParams } from "react-router-dom";

function MovieDetails(props) {
  const { title } = useParams();
  const movie = props.data.find((mov) => mov.original_title === title);
  // console.log(movie)
  return (
    <div className="details-container">
      <img
        className="moviebanner"
        src={movie.movie_banner}
        alt="movie banner"
      />
      <div className="test">
       
        <div className="movieinfo">Director: {movie && movie.director}</div>
        <div className="movieinfo">
          Release Year: {movie && movie.release_date}
        </div>
        <div className="movieinfo">Movie Title: {movie && movie.title}</div>
        <div className="movieinfo">
          Original Title: {movie && movie.original_title_romanised}
        </div>
        <div className="movieinfo">
          Movie Description: {movie && movie.description}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
