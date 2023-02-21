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

describe("#ceaserCiper", () => {
  test("Create a ceaser ciper with the string given an offset", () => {
    expect(func.ceaserCiper("Hello there!", 5)).toBe("Hjqqt ymjwj!");
  });
});

describe("#analyzeArray", () => {
  test("Input an array and get data from it", () => {
    expect(func.analyzeArray([1, 2, 3, 4, 5, 12])).toMatchObject({
      avg: 4.5,
      legnth: 6,
      max: 12,
      min: 1,
    });
  });
});
