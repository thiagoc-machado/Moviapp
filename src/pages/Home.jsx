import { useState, useEffect } from 'react';
import React from 'react';
import Movie from './Movie';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
  }, []);

  return (
    <div>
      {topMovies &&
        topMovies.map((movie) => <p>{movie.title}</p>)}
    </div>
  );
};

export default Home;
