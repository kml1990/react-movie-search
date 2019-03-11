import { fetchMovies } from '../api/moviesApi';

export const getMovies = title => dispatch => {
  const returnEmpty = () => {
    dispatch({
      type: 'GET_MOVIES',
      payload: [],
      title: title
    });
  };
  if (title.length > 2) {
    dispatch(setMoviesLoading());
    fetchMovies('s=' + title)
      .then(res => res.json())
      .then(json => {
        const payload = !json.Error ? json.Search : [];
        dispatch({
          type: 'GET_MOVIES',
          payload: payload,
          title: title
        });
      })
      .catch(err => {
        returnEmpty();
      });
  } else {
    returnEmpty();
  }
};

export const getMovieById = id => dispatch => {
  dispatch(setMoviesLoading());
  fetchMovies('i=' + id)
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: 'GET_MOVIE_BY_ID',
        payload: json
      });
    })
    .catch(err => {
      dispatch({
        type: 'GET_MOVIES',
        payload: {}
      });
    });
};

export const setMoviesLoading = () => {
  return {
    type: 'MOVIES_LOADING'
  };
};
