const { getAll, getOne, create, update, deleteOne } = require("./pokemon");

describe("Pokemon service", () => {
  test("getAll", () => {
    const data = getAll();

    expect(data.length).toEqual(10);
  });
});
