const {
  getAll,
  getOne,
  create,
  update,
  deleteOne
} = require("../services/pokemon");

module.exports = {
  getAll: (req, res) => {
    res.json(getAll());
  },
  getOne: (req, res) => {},
  create: (req, res) => {},
  update: (req, res) => {},
  deleteOne: (req, res) => {}
};
// curl http://localhost:3000/api/pokemons
