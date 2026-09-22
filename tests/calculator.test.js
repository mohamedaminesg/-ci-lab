const { add, subtract, divide } = require("../src/calculator");

test("adds 2 + 3 to equal 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts 10 - 4 to equal 6", () => {
  expect(subtract(10, 4)).toBe(6);
});

test("divides 10 / 2 to equal 5", () => {
  expect(divide(10, 2)).toBe(5);
});

test("throws an error when dividing by zero", () => {
  expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});