import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import FunFacts from "./components/FunFacts";

const API = "https://ghibliapi.herokuapp.com/films/";

function App() {
  const searchMovies = async (id) => {
    const movies = await axios.get(`${API}`);
  };

  useEffect(() => {
    searchMovies();
  }, []);

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films`);
      setMovieData(data);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <div>
        <Header />

        <Navbar data={movieData} />
      </div>

      <Routes>
        <Route path="/" element={<MovieList data={movieData} />} />
        <Route
          path="/movie/:title"
          element={<MovieDetails data={movieData} />}
        />
        <Route path="/funfacts" element={<FunFacts />} />
      </Routes>
    </div>
  );
}

export default App;

//make posters clickable and take you to specific movie details page
//create routes
