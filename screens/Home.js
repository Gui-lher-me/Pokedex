import React, { Fragment } from 'react';
import { Header } from '../components/Header';
import { PokemonButton } from '../components/PokemonButton';
import { PokemonList } from '../components/PokemonList';

export function Home({ pokemons, loadMorePokemons }) {
  return (
    <Fragment>
      <Header text="Gerard's Pokédex" />
      <PokemonList pokemons={pokemons} />
      {pokemons.length <= 600 && (
        <PokemonButton onPress={loadMorePokemons} title='Load More Pokemons' />
      )}
    </Fragment>
  );
}
