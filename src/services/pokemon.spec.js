const { getAll, getOne, create, update, deleteOne } = require("./pokemon");
const pokemons = require("../db/mock-pokemon");

describe("Pokemon service", () => {
  beforeEach(() => {});

  test("getAll", () => {
    const data = getAll();

    expect(data.length).toEqual(10);
  });

  test("getOne - success", () => {
    const data = getOne(1);
    expect(data.name).toEqual("Bulbizarre");
  });

  test("getOne - fail", () => {
    const data = getOne(0);
    expect(data.code).toEqual(401);
    expect(data.message).toEqual("Not found");
  });

  test("create", () => {
    const mock = {
      name: "Groupix",
      hp: 17,
      cp: 8,
      picture:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
      types: ["Feu"],
    };
    expect(pokemons.length).toEqual(10);
    const data = create(mock);
    expect(pokemons.length).toEqual(11);

    expect(data.name).toEqual("Groupix");
  });

  test("update", () => {
    const mock = {
      name: "Rade",
    };
    expect(getOne(1).name).toEqual("Bulbizarre");
    const data = update(1, mock);
    expect(data.name).toEqual("Rade");
    expect(data.cp).toEqual(5);
    expect(data).toMatchSnapshot();
  });
});
