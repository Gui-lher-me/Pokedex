import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text } from 'react-native';
import 'react-native-gesture-handler';
import { apiRequest } from './api/http-common';
import { Home } from './screens/Home';

export default function App() {
  const [pokemons, pokemonsSet] = useState(null);
  const [nextUrl, nextUrlSet] = useState(null);
  const [isFetching, isFetchingSet] = useState(true);
  const [errorMessage, errorMessageSet] = useState(null);

  useEffect(() => {
    apiRequest
      .get()
      .then((response) => {
        const { data } = response;
        const { results: pokemons, next } = data;
        nextUrlSet(next);
        pokemonsSet(pokemons);
      })
      .catch((error) => {
        errorMessageSet('Something went wrong. Please try again :)');
      })
      .finally(() => {
        isFetchingSet(false);
      });
    return () => {};
  }, []);

  const loadMorePokemons = async () => {
    try {
      const response = await apiRequest.get(nextUrl);
      const { data } = response;
      const { results: pokemons, next } = data;
      nextUrlSet(next);
      pokemonsSet((previousPokemons) => [...previousPokemons, ...pokemons]);
    } catch (error) {
      console.log(error);
    } finally {
      //
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {isFetching && !errorMessage && !pokemons && (
        <ActivityIndicator size='large' />
      )}
      {!isFetching && errorMessage && !pokemons && <Text>{errorMessage}</Text>}
      {!isFetching && !errorMessage && pokemons && (
        <Home loadMorePokemons={loadMorePokemons} pokemons={pokemons} />
      )}
    </SafeAreaView>
  );
}
