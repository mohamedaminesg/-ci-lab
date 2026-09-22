const {add} = require("../src/calculator");

test("2+3 doit etre egal a 5", () => {
  expect(add(2, 3)).toBe(5);
});
