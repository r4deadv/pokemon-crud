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
  create: () => {},
  update: (id) => {},
  deleteOne: (id) => {},
};
