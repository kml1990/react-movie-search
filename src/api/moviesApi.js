const apiKey = 'your api key';

export const fetchMovies = params => {
  return fetch(`https://www.omdbapi.com/?apiKey=${apiKey}&${params}`);
};
