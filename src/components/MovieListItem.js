import * as React from 'react';
import { Link } from 'react-router-dom';

export const MovieListItem = ({ imdbID, title, year, poster }) => {
  if (poster === 'N/A') {
    poster = 'https://via.placeholder.com/35/?text=No Image';
  }
  return (
    <li className="item">
      <Link to={'/movies/' + imdbID}>
        <img src={poster} className="ui mini rounded image" alt="" />
        <div className="content">
          <h4 className="header">{title}</h4>
          <div className="description">{year}</div>
        </div>
      </Link>
    </li>
  );
};
