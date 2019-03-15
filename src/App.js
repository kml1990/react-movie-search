import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import { MoviesContainer } from './containters/MoviesContainer';
import MovieItem from './components/MovieItem';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Redirect from="/" to="movies" />
          <Route exact path="/movies" component={MoviesContainer} />
          <Route exact path="/movies/:id" component={MovieItem} />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
