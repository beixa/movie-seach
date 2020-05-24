import React from "react";
import { Link } from "react-router-dom";

export const Movie = ({id, title, poster, year}) => {
  return (
    <Link to={`/detail/${id}`}>
      <div>
        <figure>
          <img alt={title} src={poster} />
        </figure>
      </div>
      <div>
        <div>
          <div>
            <p>{title}</p>
            <p>{year}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
