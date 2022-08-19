const sumCalculator = require("./sumCalculator");

describe("sumCalculator", () => {
  xit("returns the input into an array", () => {
    expect(sumCalculator("1 + 1")).toEqual(["1 + 1"]);
  });

  it("returns the input as seperate elements", () => {
    expect(sumCalculator("1 + 1")).toEqual(["1", "+", "1"]);
  });
});
