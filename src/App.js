import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { MoviesContainer } from './containters/MoviesContainer';
import MovieItem from './components/MovieItem';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Route exact path="/" component={MoviesContainer} />
          <Route exact path="/:id" component={MovieItem} />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
