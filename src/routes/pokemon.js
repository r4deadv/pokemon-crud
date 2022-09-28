const {
  getAll,
  getOne,
  create,
  update,
  deleteOne
} = require("../controllers/pokemon");

module.exports = (app) => {
  app
    // get all
    .get("/api/pokemons", getAll)
    // get by id
    .get("/api/pokemons/:id", getOne)
    // create
    .post("/api/pokemons", create)
    // update
    .put("/api/pokemons/:id", update)
    // delete
    .delete("/api/pokemons/:id", deleteOne);
};
