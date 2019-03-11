import React, { Component } from 'react';
import { connect } from 'react-redux';

import MoviesFilter from '../components/MoviesFilter';
import AsyncComponent from '../components/AsyncComponent';

class Movies extends Component {
  lazyLoadMovieList = () => {
    if (this.props.loading === true) {
      return <div className="ui active loader" />;
    }

    if (!this.props.movies.length) {
      return <h3>No results ... </h3>;
    }

    return (
      <AsyncComponent
        componentProps={{ movies: this.props.movies }}
        componentProvider={() =>
          import('./MoviesList').then(module => module.MoviesList)
        }
      />
    );
  };

  render() {
    return (
      <main className="ui main text container">
        <form className="ui large form">
          <div className="ui segment">
            <MoviesFilter />
          </div>
        </form>
        {this.lazyLoadMovieList()}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.app.movies,
    loading: state.app.loading
  };
};

const mapDispatchToProps = {};

export const MoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
