const func = require("./main.js");

describe("#Test", () => {
  test("Returns Hi", () => {
    expect(func).toBe("Hi");
  });
});
