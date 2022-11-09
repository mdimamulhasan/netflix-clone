import { useState, useEffect } from "react";
import axios from "./axios.js";
import requests from "./requests.js";

const Banner = () => {
  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOrginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    };
    fetchData();
  }, []);

  const truncate = (str, n) => {
    const result = str?.length > n ? str.substr(0, n - 1) + "..." : str;
    return result;
  };

    return (
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "cover cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/w1400_and_h450_bestv2${Movie.backdrop_path}")`,
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {Movie.title || Movie.name || Movie.orginal_name}
          </h1>

          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>

          <h1 className="banner_description">
            {truncate(Movie.overview, 150)}
          </h1>
        </div>
        <div className="fade_bottom" />
      </header>
    );
};

export default Banner;