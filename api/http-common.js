import axios from 'axios';

export const apiRequest = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10',
});

apiRequest.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

apiRequest.interceptors.response.use(
  (response) => response,
  (error) => error
);
