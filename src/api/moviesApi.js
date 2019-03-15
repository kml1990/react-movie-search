const apiKey = 'your key';

export const fetchMovies = params => {
  return fetch(`https://www.omdbapi.com/?apiKey=${apiKey}&${params}`);
};
