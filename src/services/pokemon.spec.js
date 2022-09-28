const { getAll, getOne, create, update, deleteOne } = require("./pokemon");

describe("Pokemon service", () => {
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
});
