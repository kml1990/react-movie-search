const apiKey = '4434a6dd';

export const fetchMovies = params => {
  return fetch(`https://www.omdbapi.com/?apiKey=${apiKey}&${params}`);
};
