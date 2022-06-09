import React, { useEffect, useState } from "react";
// as the instance is export as the default
import axios from "../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base__url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  // snippet for the data import
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovie(request.data.results);
      // console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (item) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        item?.name ||
          item?.original_name ||
          item?.original_title ||
          item?.title ||
          ""
      ).then((response) => {
        const urlParams = new URLSearchParams(new URL(response).search);
        setTrailerUrl(urlParams.get("v"));
        console.log(urlParams);
      });
    }
  };

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
              onClick={() => {
                handleClick(item);
              }}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base__url}${
                isLargeRow ? item.poster_path : item.backdrop_path
              }`}
              alt={item.name}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
