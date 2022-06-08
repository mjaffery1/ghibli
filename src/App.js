import "./App.css";
import Navbar from "./components/Navbar";
import MovieCard from "./components/ MovieCard";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


const API = 'https://ghibliapi.herokuapp.com/films/'

function App() {
  const [movieCards, setMovieCards] = useState([])
  
const searchMovies = async (id) => {
  const movies = await axios.get(`${API}`)
  const movie = await movies.json

  // console.log(movie)
};

useEffect(() => {
  searchMovies();
  
}, []);

  const [movieData, setMovieData] = useState([]);

  

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films`);
      setMovieData(data);};
    getData();
  }, []);

  return (
  
    <div className="App">
    <div>
      <Header />
    </div>
      <div>
        <Navbar data={movieData}/>
      </div>
      <div>
        <MovieList data={movieData} />
      </div>
      <div>
        {movieData.map((movie) => (
          <MovieCard movieData={movieData} movie={movie} key={movie.title}/>
          
        ))}
      </div>
      <div>
      {movieData.map((movie) => (
      <MovieDetails movie={movie} key={movie.id}/>
      ))}
      </div>
    </div>
    
  );
}

export default App;
