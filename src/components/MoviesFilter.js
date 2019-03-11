import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../actions/movieActions';

class MoviesFilter extends Component {
  handleTitleSearch = e => {
    if (this.props.loading === true) {
      return false;
    }
    this.props.getMovies(e.currentTarget.value);
  };

  render() {
    return (
      <div className="field">
        <div className="ui icon fluid input">
          <input
            type="text"
            name="title"
            placeholder="Search movies..."
            value={this.props.title}
            onChange={this.handleTitleSearch}
          />
          <i className="search icon" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.app.title,
    loading: state.app.loading
  };
};

const mapDispatchToProps = { getMovies };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesFilter);
