import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgUri as Image } from 'react-native-svg';
import { instance } from '../api/http-common';

export function PokemonCard({ pokemon: { url }, onPress }) {
  const [pokemon, pokemonSet] = useState(null);

  useEffect(() => {
    instance
      .get(url)
      .then((response) => {
        const { data: pokemon } = response;
        pokemonSet({
          id: pokemon.id,
          name: pokemon.name,
          types: pokemon.types,
          image: pokemon.sprites.other.dream_world.front_default,
        });
      })
      .catch((error) => {})
      .finally(() => {});
    return () => {};
  }, []);

  return (
    <TouchableOpacity
      className={`w-[334px] h-[115px] rounded-[10px] flex-row mt-5 bg-background-type-psychic`}
      onPress={onPress}
    >
      <View className='flex-1 p-5'>
        <Text>#00{pokemon?.id}</Text>
        <Text className='text-white text-2xl'>
          {pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}
        </Text>
        <View className='flex-row gap-2'>
          {pokemon?.types.map((t) => (
            <Text key={t.type.name}>{t.type.name}</Text>
          ))}
        </View>
      </View>
      <Image
        className='-mt-4 mr-5'
        uri={pokemon?.image}
        width={130}
        height={130}
      />
    </TouchableOpacity>
  );
}
