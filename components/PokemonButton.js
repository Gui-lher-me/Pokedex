import { Text, TouchableOpacity } from 'react-native';

export function PokemonButton({ onPress, text }) {
  return (
    <TouchableOpacity className='' onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
