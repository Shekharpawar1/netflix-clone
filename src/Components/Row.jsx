import React, { useEffect, useState } from "react";
// as the instance is export as the default
import axios from "../axios";
import "./Row.css";

const base__url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movie, setMovie] = useState([]);

  // snippet for the data import
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results)
      setMovie(request.data.results);
      console.table(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      {/* title */}
      <h1>{title}</h1>
      {/* container for the images or the posters */}
      <div className="row__posters">
        {movie.map((item) => {
          return (
            <img
              key={item.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base__url}${
                isLargeRow ? item.poster_path : item.backdrop_path
              }`}
              alt={item.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
