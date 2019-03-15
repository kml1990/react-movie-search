import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getMovieById } from '../actions/movieActions';

import AsyncComponent from './AsyncComponent';

class MovieItem extends Component {
  componentDidMount() {
    const { params } = this.props.match;
    this.props.getMovieById(params.id);
  }

  loadMovieInfo = () => {
    if (this.props.loading === true) {
      return <div className="ui active loader" />;
    }
    if (typeof this.props.movie.Error !== 'undefined') {
      return <h3>{this.props.movie.Error}</h3>;
    }

    return (
      <AsyncComponent
        componentProps={{ movie: this.props.movie }}
        componentProvider={() =>
          import('./MovieCard').then(module => module.MovieCard)
        }
      />
    );
  };

  render() {
    return (
      <main className="movie-info">
        <Link to="/movies" className="ui left labeled icon button">
          <i className="left arrow icon" />
          Back
        </Link>
        {this.loadMovieInfo()}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.app.movie,
    loading: state.app.loading
  };
};

const mapDispatchToProps = { getMovieById };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieItem);
