const func = require("./main.js");

describe("#autoCap", () => {
  test("Returns the first letter to be capitalized", () => {
    expect(func.autoCap("hello")).toBe("Hello");
  });
});

describe("#reverseString", () => {
  test("Reverse the given string input", () => {
    expect(func.reverseStr("Hello")).toBe("olleH");
  });
});
