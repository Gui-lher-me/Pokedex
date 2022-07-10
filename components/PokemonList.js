import React from 'react';
import { PokemonCard } from './PokemonCard';

export function PokemonList({ pokemons }) {
  return pokemons?.map((pokemon) => (
    <PokemonCard key={pokemon.url} pokemon={pokemon} />
  ));
}
