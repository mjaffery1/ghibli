import React from "react";
import MovieCard from "./ MovieCard";

function MovieList(props) {
  const movieData = props.data;

  const movies = props.data.map((movie, index) => {
    return <div>{movie.title}</div>;
  });
  console.log({ movieData });
  return (
    <div className="ast">
      {movieData.map((movie) => (
        <MovieCard
          movie={movie}
          key={movie.original_title}
        />
      ))}
    </div>
  );
}

export default MovieList;
