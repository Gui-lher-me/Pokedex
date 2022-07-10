import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export function PokemonCard({ pokemon, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text key={pokemon.url}>{pokemon.name}</Text>
    </TouchableOpacity>
  );
}
