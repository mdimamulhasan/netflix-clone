import React, { useState, useEffect } from "react";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/w1400_and_h450_bestv2";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {Movies.map((movie) => (
          <img
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
