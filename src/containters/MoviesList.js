import * as React from 'react';
import { MovieListItem } from '../components/MovieListItem';

export class MoviesList extends React.Component {
  movieToMovieItem = movie => {
    const { imdbID, Title, Year, Poster } = movie;
    return (
      <MovieListItem
        key={imdbID}
        imdbID={imdbID}
        title={Title}
        year={Year}
        poster={Poster}
      />
    );
  };

  render() {
    return (
      <ul className="ui relaxed divided list selection">
        {this.props.movies.map(this.movieToMovieItem)}
      </ul>
    );
  }
}
