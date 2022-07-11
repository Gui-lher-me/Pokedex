import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10',
});

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => error
);
