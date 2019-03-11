import React from 'react';

export const MovieCard = props => {
  let {
    Poster,
    Title,
    Ratings,
    Genre,
    Plot,
    Writer,
    Actors,
    Country,
    Year,
    Runtime
  } = props.movie;

  if (Poster === 'N/A') {
    Poster = 'https://via.placeholder.com/300/?text=No Image';
  }

  return (
    <div className="ui violet card">
      <div className="image">
        <img src={Poster} />
      </div>
      <div className="content">
        <div className="header">
          {Title} <span>({Ratings.length ? Ratings[0].Value : '--/--'})</span>
        </div>
        <div className="meta">{Genre}</div>
        <div className="description">
          {Plot}
          <div className="ui selection list">
            <span className="item">
              <div className="ui teal horizontal label">Director</div>
              {Writer}
            </span>
            <span className="item">
              <div className="ui blue horizontal label">Actors</div>
              {Actors}
            </span>
          </div>
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">
          {Country} {Year}
        </span>
        <span>
          <i className="clock outline icon" />
          {Runtime}
        </span>
      </div>
    </div>
  );
};
