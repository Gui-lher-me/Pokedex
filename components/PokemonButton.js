import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export function PokemonButton({ onPress, title }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'lightgreen',
      }}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
