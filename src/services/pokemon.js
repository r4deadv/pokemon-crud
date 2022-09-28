const pokemon = require("../controllers/pokemon");
const pokemons = require("../db/mock-pokemon");

module.exports = {
  getAll: () => {
    return pokemons;
  },
  getOne: (id) => {
    const pokemon = pokemons.find((pokemon) => pokemon.id === id);
    if (!pokemon) {
      return {
        code: 401,
        message: "Not found",
      };
    }
    return pokemon;
  },
  create: (pokemon) => {
    pokemons.push(pokemon);
    return pokemons[10];
  },
  update: (id, data) => {
    const pokemonIndex = pokemons.findIndex((pokemon) => pokemon.id === id);
    pokemons[pokemonIndex] = { ...pokemons[pokemonIndex], name: data.name };
    return pokemons[pokemonIndex];
  },
  deleteOne: (id) => {},
};
