const initialState = {
  movies: [],
  movie: {},
  title: '',
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_MOVIES':
      return {
        ...state,
        movies: action.payload,
        title: action.title,
        loading: false
      };
    case 'GET_MOVIE_BY_ID':
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    case 'MOVIES_LOADING':
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
