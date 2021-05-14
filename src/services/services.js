import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';
const apiKey = 'c85eab87f37d43b30658071ba8c1c21f';

const serviceRequest = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 3000,
});

const delayFunc = delay => new Promise(resolve => setTimeout(resolve,delay))

const services = {
  searchMovie: (query) =>
    serviceRequest
      .get('/search/movie', {
        params: { language: 'en-US', page: 1, include_adult: false, query, api_key: apiKey },
      })
      .then((response) => response.data),
  getPaginationTotal:async () => {
    await delayFunc(3000);
    return 345;
  }
};

export default services;