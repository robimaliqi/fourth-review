const sumCalculator = require("./sumCalculator");

describe("sumCalculator", () => {
  it("returns the input into an array", () => {
    expect(sumCalculator("1 + 1")).toEqual(["1 + 1", 2.0]);
  });
  //assumption of two numbers

  it("returns the input as seperate elements", () => {
    expect(sumCalculator("1 + 2")).toEqual(["1 + 2", 3.0]);
  });
  //assumption of a different calculation

  xit("returns the array as integers", () => {
    expect(sumCalculator("2 + 2")).toEqual();
  });
  //assumption of two different calculation

  //next test would be a different calculation such as minus "-"

  //any case that ressembles what I have should pass

  //
});
