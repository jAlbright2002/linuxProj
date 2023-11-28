#!/usr/bin/env zx
$.verbose = false;

const randomPokemonId = Math.floor(Math.random() * 898) + 1; // There are currently 898 Pokémon

const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
const pokemon = await response.json();

console.log(`Name: ${pokemon.name}`);
console.log(`Type: ${pokemon.types.map(type => type.type.name).join(', ')}`);
console.log(`ID: ${pokemon.id}`);
console.log(`Height: ${pokemon.heightA}`);
console.log(`Weight: ${pokemon.weight}`);
console.log('Abilities:');
pokemon.abilities.forEach((ability) => console.log(`- ${ability.ability.name}`));
