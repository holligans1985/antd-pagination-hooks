// import axios from 'axios';
import fakeData from '../data/fakeData.json'
import {Query} from '../types'

// const baseURL = 'https://api.themoviedb.org/3/';
// const apiKey = 'c85eab87f37d43b30658071ba8c1c21f';

// const serviceRequest = axios.create({
//   baseURL,
//   headers: { 'Content-Type': 'application/json' },
//   timeout: 3000,
// });

const delayFunc = (delay:number) => new Promise(resolve => setTimeout(resolve,delay))

const services = {
  // searchMovie: (query) =>
  //   serviceRequest
  //     .get('/search/movie', {
  //       params: { language: 'en-US', page: 1, include_adult: false, query, api_key: apiKey },
  //     })
  //     .then((response) => response.data),
  getPaginationTotal:async () => {
    await delayFunc(3000);
    return fakeData.length;
  },
  getPaginatedData:async (query:Query) => {
    await delayFunc(3000);
    const {offset, limit} = query;
    return fakeData.slice(offset, offset + limit);
    // return piece of data
  }
};

export default services;