import React from "react";
import { Movie } from "./Movie";

export const MoviesList = ({movies}) => {
  return (
    <div className="MoviesList">
      {movies.map((movie) => {
        return (
          <div key={movie.imdbID} className="MoviesList-item">
            <Movie
              id={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
            />
          </div>
        );
      })}
    </div>
  );
};
