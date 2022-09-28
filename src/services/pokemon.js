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
  update: (id) => {},
  deleteOne: (id) => {},
};
