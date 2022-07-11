import { useNavigation } from '@react-navigation/native';
import { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import { instance } from '../api/http-common';
// import { Header } from '../components/Header';
// import { PokemonButton } from '../components/PokemonButton';
import { PokemonCard } from '../components/PokemonCard';

export function Home() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
    return () => {};
  }, []);

  const [pokemons, pokemonsSet] = useState(null);
  const [nextUrl, nextUrlSet] = useState(null);
  const [isFetching, isFetchingSet] = useState(true);
  const [errorMessage, errorMessageSet] = useState(null);

  useEffect(() => {
    instance
      .get()
      .then((response) => {
        const { data } = response;
        const { results: pokemons, next } = data;
        nextUrlSet(next);
        pokemonsSet(pokemons);
      })
      .catch((error) => {
        errorMessageSet('Something went wrong. Please try again!');
      })
      .finally(() => {
        isFetchingSet(false);
      });
    return () => {};
  }, []);

  const loadMorePokemons = async () => {
    try {
      const response = await instance.get(nextUrl);
      const { data } = response;
      const { results: pokemons, next } = data;
      nextUrlSet(next);
      pokemonsSet((previousPokemons) => [...previousPokemons, ...pokemons]);
    } catch (error) {
      alert(error);
    } finally {
      // Do something
    }
  };

  const pokemonList = pokemons?.map((pokemon) => (
    <PokemonCard key={pokemon.url} pokemon={pokemon} />
  ));

  return (
    <SafeAreaView
      // TODO
      style={{ marginTop: StatusBar.currentHeight }}
      className='flex-1 items-center justify-center bg-white'
    >
      {isFetching && !errorMessage && !pokemons && (
        <ActivityIndicator size='large' />
      )}
      {!isFetching && errorMessage && !pokemons && <Text>{errorMessage}</Text>}
      {!isFetching && !errorMessage && pokemons && (
        <Fragment>
          {/* <Header text="Gerard's Pokédex" /> */}
          <ScrollView>{pokemonList}</ScrollView>
          {/* {pokemons.length <= 600 && (
            <PokemonButton
              onPress={loadMorePokemons}
              text='Load More Pokemons'
            />
          )} */}
        </Fragment>
      )}
    </SafeAreaView>
  );
}
